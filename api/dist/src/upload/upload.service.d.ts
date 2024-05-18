/// <reference types="multer" />
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
export declare class UploadService {
    private prisma;
    private config;
    private readonly telegramBotToken;
    private readonly telegramChatId;
    constructor(prisma: PrismaService, config: ConfigService);
    uploadStartupVideo(file: Express.Multer.File, startupId: number): Promise<{
        success: boolean;
        message: string;
        videoUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        videoUrl?: undefined;
    }>;
    uploadStartupImage(file: Express.Multer.File, startupId: number): Promise<{
        success: boolean;
        message: string;
        imageUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        imageUrl?: undefined;
    }>;
    uploadUserProfileImage(file: Express.Multer.File, userId: number): Promise<{
        success: boolean;
        message: string;
        imageUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        imageUrl?: undefined;
    }>;
    uploadUserBannerImage(file: Express.Multer.File, userId: number): Promise<{
        success: boolean;
        message: string;
        imageUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        imageUrl?: undefined;
    }>;
    uploadInvestorProfileImage(file: Express.Multer.File, investorId: number): Promise<{
        success: boolean;
        message: string;
        imageUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        imageUrl?: undefined;
    }>;
    uploadInvestorBannerImage(file: Express.Multer.File, investorId: number): Promise<{
        success: boolean;
        message: string;
        imageUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        imageUrl?: undefined;
    }>;
    uploadStartupDocument(file: Express.Multer.File, documentType: string, startupId: number): Promise<{
        success: boolean;
        message: string;
        documentUrl: string;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        documentUrl?: undefined;
    }>;
    saveStartupDocumentUrl(documentUrl: string, documentType: string, startupId: number): Promise<void>;
    downloadStartupDocs(documentId: number): Promise<{
        filePath: string;
        originalFileName: string;
    }>;
}
