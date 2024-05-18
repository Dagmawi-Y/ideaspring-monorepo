import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserProfile(userId: number): Promise<{
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
    updateUserProfile(userId: number, data: UpdateUserDto): Promise<{
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
    deleteUserProfile(userId: number): Promise<{
        message: string;
    }>;
}
