"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async register(dto) {
        const hash = await argon.hash(dto.password);
        const verificationToken = crypto.randomBytes(32).toString('hex');
        try {
            const result = await this.prisma.$transaction(async (tx) => {
                const user = await tx.user.create({
                    data: {
                        email: dto.email,
                        password: hash,
                        first_name: dto.first_name,
                        last_name: dto.last_name,
                        isEmailVerified: false,
                        verificationToken,
                    },
                });
                const role = await tx.role.findUnique({
                    where: { name: dto.role },
                });
                if (!role) {
                    throw new common_1.BadRequestException(`Role ${dto.role} does not exist.`);
                }
                await tx.userRole.create({
                    data: {
                        userId: user.id,
                        roleId: role.id,
                    },
                });
                console.log({
                    role: dto.role,
                });
                if (dto.role === 'investor') {
                    const investor = await tx.investor.create({
                        data: {
                            user: {
                                connect: {
                                    id: user.id,
                                },
                            },
                        },
                    });
                    console.log({
                        investor,
                    });
                    await tx.investorProfile.create({
                        data: {
                            investor_id: investor.id,
                            first_name: dto.first_name,
                            last_name: dto.last_name,
                            email: dto.email,
                        },
                    });
                    await tx.investorCompanyProfile.create({
                        data: {
                            investor_id: investor.id,
                        },
                    });
                    await tx.investorInterests.create({
                        data: {
                            investor_id: investor.id,
                        },
                    });
                }
                await this.sendVerificationEmail(user.email, verificationToken);
                return {
                    message: 'User registered successfully. Please verify your email.',
                };
            });
            return result;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Username already in use. Please try another one');
                }
            }
            throw error;
        }
    }
    async sendVerificationEmail(email, token) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.config.get('GMAIL_USER'),
                pass: this.config.get('GMAIL_PASSWORD'),
            },
            secure: true,
            port: 465,
        });
        const mailOptions = {
            from: `"${this.config.get('APP_NAME')}" <${this.config.get('APP_ADMIN')}>`,
            to: email,
            subject: 'Verify your email address',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verify your email address</title>
            <style>
              /* Reset and base styles */
              body { font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333; }
              a { color: #007bff; text-decoration: none; }
              a:hover { text-decoration: underline; }
    
              /* Layout and responsive styles */
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              @media (max-width: 600px) {
                .container { padding: 10px; }
              }
    
              /* Button styles */
              .btn { display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; border-radius: 4px; text-decoration: none; }
              .btn:hover { background-color: #0056b3; }
              .btn-text { color: #fff; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to IdeaSpring!</h1>
              <p>Hello there,</p>
              <p>We're thrilled to have you as a part of the IdeaSpring community. This email is coming to you from the friendly IdeaSpring team.</p>
              <p>To get started, please click the button below to verify your email address:</p>
              <p><a href="${this.config.get('FRONTEND_URL')}/verify-email?token=${token}" class="btn"><span class="btn-text">Verify Email</span></a></p>
              <p>If the button doesn't work, you can copy and paste the following link into your browser:</p>
              <p><a href="${this.config.get('FRONTEND_URL')}/verify-email?token=${token}">${this.config.get('FRONTEND_URL')}/verify-email?token=${token}</a></p>
              <p>We're excited to have you on board and can't wait to see what amazing ideas you'll bring to the table.</p>
              <p>Thanks,<br>The IdeaSpring Team</p>
            </div>
          </body>
        </html>
      `,
        };
        await transporter.sendMail(mailOptions);
    }
    async verifyEmail(token) {
        const user = await this.prisma.user.findUnique({
            where: { verificationToken: token },
        });
        if (!user) {
            throw new common_1.BadRequestException('Invalid verification token');
        }
        await this.prisma.user.update({
            where: { id: user.id },
            data: { isEmailVerified: true, verificationToken: null },
        });
        console.log({
            msg: 'email verified success',
        });
        return { message: 'Email verified successfully' };
    }
    async login(dto) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { email: dto.email },
                include: { userRole: { include: { role: true } } },
            });
            if (!user) {
                throw new common_1.ForbiddenException('User not found');
            }
            const isPasswordCorrect = await argon.verify(user.password, dto.password);
            if (!isPasswordCorrect) {
                throw new common_1.ForbiddenException('Invalid credentials');
            }
            const role = user.userRole?.role;
            return this.signToken(user.id, user.email, role?.name ?? '');
        }
        catch (error) {
            throw error;
        }
    }
    async logout(token) {
        try {
            const payload = await this.jwt.verifyAsync(token, {
                secret: this.config.get('JWT_SECRET'),
            });
            await this.prisma.revokedToken.create({
                data: {
                    token,
                    userId: payload.sub,
                },
            });
            console.log({
                msg: 'User logged out - Token Revoked',
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    async forgotPassword(email) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const pwResetToken = crypto.randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 3600000);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { pwResetToken, pwResetTokenExpiry: expiresAt },
        });
        const resetUrl = `${this.config.get('FRONTEND_URL')}/reset-password?token=${pwResetToken}`;
        await this.sendPasswordResetEmail(email, resetUrl);
        return { message: 'Password reset email sent' };
    }
    async resetPassword(token, newPassword) {
        const user = await this.prisma.user.findFirst({
            where: {
                pwResetToken: token,
                pwResetTokenExpiry: { gte: new Date() },
            },
        });
        if (!user) {
            throw new common_1.BadRequestException('Invalid or expired reset token');
        }
        const hash = await argon.hash(newPassword);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                password: hash,
                pwResetToken: null,
                pwResetTokenExpiry: null,
            },
        });
        return { message: 'Password reset successful' };
    }
    async sendPasswordResetEmail(email, resetUrl) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.config.get('GMAIL_USER'),
                pass: this.config.get('GMAIL_PASSWORD'),
            },
            secure: true,
            port: 465,
        });
        const mailOptions = {
            from: `"${this.config.get('EMAIL_DISPLAY_NAME')}" <${this.config.get('APP_ADMIN')}>`,
            to: email,
            subject: 'Reset your password',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reset your password</title>
            <style>
              /* Reset and base styles */
              body { font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333; }
              a { color: #007bff; text-decoration: none; }
              a:hover { text-decoration: underline; }
    
              /* Layout and responsive styles */
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              @media (max-width: 600px) {
                .container { padding: 10px; }
              }
    
              /* Button styles */
              .btn { display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; border-radius: 4px; text-decoration: none; }
              .btn:hover { background-color: #0056b3; }
              .btn-text { color: #fff; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Reset your password</h1>
              <p>Hello there,</p>
              <p>We received a request to reset your password for your IdeaSpring account. If you didn't initiate this request, please ignore this email.</p>
              <p>To reset your password, click the button below:</p>
              <p><a href="${resetUrl}" class="btn"><span class="btn-text">Reset Password</span></a></p>
              <p>If the button doesn't work, you can copy and paste the following link into your browser:</p>
              <p><a href="${resetUrl}">${resetUrl}</a></p>
              <p>This link will expire in one hour.</p>
              <p>Thanks,<br>The IdeaSpring Team</p>
            </div>
          </body>
        </html>
      `,
        };
        await transporter.sendMail(mailOptions);
    }
    async signToken(userId, email, role) {
        const payload = {
            sub: userId,
            email,
            role,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map