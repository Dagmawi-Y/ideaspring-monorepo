import { AuthService } from './auth.service';
import { SignupDto } from './dto';
import { SignInDto } from './dto/signIn.dto';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto): Promise<{
        message: string;
    }>;
    signin(dto: SignInDto): Promise<{
        access_token: string;
    }>;
    verifyEmail(token: string): Promise<{
        message: string;
    }>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    logout(request: Request): Promise<{
        msg: string;
    }>;
}
