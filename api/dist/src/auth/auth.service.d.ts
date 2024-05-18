import { PrismaService } from '../prisma/prisma.service';
import { SignupDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SignInDto } from './dto/signIn.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    register(dto: SignupDto): Promise<{
        message: string;
    }>;
    private sendVerificationEmail;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    login(dto: SignInDto): Promise<{
        access_token: string;
    }>;
    logout(token: string): Promise<void>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    private sendPasswordResetEmail;
    signToken(userId: number, email: string, role: string): Promise<{
        access_token: string;
    }>;
}
