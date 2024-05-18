/// <reference types="multer" />
import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadStartupVideo(file: Express.Multer.File, startupId: string, res: any): Promise<any>;
    uploadStartupImage(file: Express.Multer.File, startupId: string, res: any): Promise<any>;
    uploadUserProfileImage(file: Express.Multer.File, userId: string, res: any): Promise<any>;
    uploadUserBannerImage(file: Express.Multer.File, userId: string, res: any): Promise<any>;
    uploadInvestorProfileImage(file: Express.Multer.File, investorId: string, res: any): Promise<any>;
    uploadInvestorBannerImage(file: Express.Multer.File, investorId: string, res: any): Promise<any>;
    uploadStartupDocument(file: Express.Multer.File, startupId: string, documentType: string, res: any): Promise<any>;
    downloadStartupDocs(documentId: string, res: any): Promise<void>;
}
