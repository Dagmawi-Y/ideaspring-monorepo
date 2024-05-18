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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const dto_1 = require("./dto");
const signIn_dto_1 = require("./dto/signIn.dto");
const swagger_1 = require("@nestjs/swagger");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const revoked_token_guard_1 = require("./guard/revoked_token.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(dto) {
        return this.authService.register(dto);
    }
    signin(dto) {
        return this.authService.login(dto);
    }
    async verifyEmail(token) {
        return this.authService.verifyEmail(token);
    }
    async forgotPassword(email) {
        return this.authService.forgotPassword(email);
    }
    async resetPassword(token, newPassword) {
        return this.authService.resetPassword(token, newPassword);
    }
    async logout(request) {
        const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        await this.authService.logout(token);
        return {
            msg: 'User logged out - Token Revoked',
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The user has been successfully created.',
        type: dto_1.SignupDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Check request body.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignupDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login an existing user' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The user has been successfully logged in.',
        type: signIn_dto_1.SignInDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Check credentials.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signIn_dto_1.SignInDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify a user email' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Email verification successful.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid token.' }),
    __param(0, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Initiate password reset process' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Password reset email sent.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid email.' }),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Reset user password' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Password reset successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad Request. Invalid token or password.',
    }),
    __param(0, (0, common_1.Body)('token')),
    __param(1, (0, common_1.Body)('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), revoked_token_guard_1.RevokedTokenGuard),
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Logout a user' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ description: 'User logged out successfully.' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map