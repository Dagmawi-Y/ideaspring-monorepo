import { User } from '@prisma/client';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserProfile(user: User): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        profile_image_url: string;
        banner_image_url: string;
        town: string;
        city_id: number;
        country_id: number;
        phone_number: string;
        mobile_number: string;
        bio: string;
        created_at: Date;
        investor_id: number;
        isEmailVerified: boolean;
        verificationToken: string;
        pwResetToken: string;
        pwResetTokenExpiry: Date;
    }>;
    updateUserProfile(user: User, req: any): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        profile_image_url: string;
        banner_image_url: string;
        town: string;
        city_id: number;
        country_id: number;
        phone_number: string;
        mobile_number: string;
        bio: string;
        created_at: Date;
        investor_id: number;
        isEmailVerified: boolean;
        verificationToken: string;
        pwResetToken: string;
        pwResetTokenExpiry: Date;
    }>;
    deleteUserProfile(user: User): Promise<{
        message: string;
    }>;
}
