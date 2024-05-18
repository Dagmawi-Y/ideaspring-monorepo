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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const config_1 = require("@nestjs/config");
const cloudinary_1 = require("cloudinary");
const axios_1 = require("axios");
const fs = require("fs");
const FormData = require("form-data");
let UploadService = class UploadService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
        cloudinary_1.v2.config({
            cloud_name: this.config.get('CLOUDINARY_CLOUD_NAME'),
            api_key: this.config.get('CLOUDINARY_API_KEY'),
            api_secret: this.config.get('CLOUDINARY_API_SECRET'),
        });
        this.telegramBotToken = this.config.get('TELEGRAM_BOT_TOKEN');
        this.telegramChatId = this.config.get('TELEGRAM_CHAT_ID');
    }
    async uploadStartupVideo(file, startupId) {
        try {
            const filemoonKey = this.config.get('FILEMOON_API_KEY');
            const getServerUrl = 'https://filemoonapi.com/api/upload/server';
            const { data: serverResponse } = await axios_1.default.get(getServerUrl, {
                params: { key: filemoonKey },
            });
            const uploadServerUrl = serverResponse.result;
            const formData = new FormData();
            formData.append('key', filemoonKey);
            const readableStream = fs.createReadStream(file.path);
            formData.append('file', readableStream, file.originalname);
            const { data: uploadResponse } = await axios_1.default.post(uploadServerUrl, formData, {
                headers: { ...formData.getHeaders() },
            });
            console.log({ uploadResponse });
            const fileCode = uploadResponse.files[0].filecode;
            const videoUrl = `https://filemoon.sx/d/${fileCode}`;
            await this.prisma.imagesVideos.create({
                data: {
                    video_url: videoUrl,
                    startup: { connect: { id: startupId } },
                },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'Video uploaded successfully',
                videoUrl,
            };
        }
        catch (error) {
            console.error('Error uploading video:', error);
            return {
                success: false,
                message: 'Error uploading video',
                error: error.message,
            };
        }
    }
    async uploadStartupImage(file, startupId) {
        try {
            const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, {
                folder: 'startup_images',
                public_id: `${startupId}_${file.originalname}`,
                transformation: [
                    { width: 800, height: 600, crop: 'fill' },
                    { fetch_format: 'auto', quality: 'auto' },
                ],
            });
            console.log(file.originalname);
            const imageUrl = uploadResult.secure_url;
            await this.prisma.imagesVideos.create({
                data: {
                    image_url: imageUrl,
                    startup: { connect: { id: startupId } },
                },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'Image uploaded successfully',
                imageUrl,
            };
        }
        catch (error) {
            console.error('Error uploading image:', error);
            return {
                success: false,
                message: 'Error uploading image',
                error: error.message,
            };
        }
    }
    async uploadUserProfileImage(file, userId) {
        try {
            const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, {
                folder: 'user_profile_images',
                public_id: `${userId}_${file.originalname}`,
                transformation: [
                    { width: 800, height: 800, crop: 'fill' },
                    { fetch_format: 'auto', quality: 'auto' },
                ],
            });
            const imageUrl = uploadResult.secure_url;
            await this.prisma.user.update({
                where: { id: userId },
                data: { profile_image_url: imageUrl },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'User profile image uploaded successfully',
                imageUrl,
            };
        }
        catch (error) {
            console.error('Error uploading user profile image:', error);
            return {
                success: false,
                message: 'Error uploading user profile image',
                error: error.message,
            };
        }
    }
    async uploadUserBannerImage(file, userId) {
        try {
            const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, {
                folder: 'user_banner_images',
                public_id: `${userId}_${file.originalname}`,
                transformation: [
                    { width: 1920, height: 600, crop: 'fill' },
                    { fetch_format: 'auto', quality: 'auto' },
                ],
            });
            const imageUrl = uploadResult.secure_url;
            await this.prisma.user.update({
                where: { id: userId },
                data: { banner_image_url: imageUrl },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'User banner image uploaded successfully',
                imageUrl,
            };
        }
        catch (error) {
            console.error('Error uploading user banner image:', error);
            return {
                success: false,
                message: 'Error uploading user banner image',
                error: error.message,
            };
        }
    }
    async uploadInvestorProfileImage(file, investorId) {
        try {
            const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, {
                folder: 'investor_profile_images',
                public_id: `${investorId}_${file.originalname}`,
                transformation: [
                    { width: 800, height: 800, crop: 'fill' },
                    { fetch_format: 'auto', quality: 'auto' },
                ],
            });
            const imageUrl = uploadResult.secure_url;
            await this.prisma.investorProfile.update({
                where: { id: investorId },
                data: { profile_image_url: imageUrl },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'Investor profile image uploaded successfully',
                imageUrl,
            };
        }
        catch (error) {
            console.error('Error uploading investor profile image:', error);
            return {
                success: false,
                message: 'Error uploading investor profile image',
                error: error.message,
            };
        }
    }
    async uploadInvestorBannerImage(file, investorId) {
        try {
            const uploadResult = await cloudinary_1.v2.uploader.upload(file.path, {
                folder: 'investor_banner_images',
                public_id: `${investorId}_${file.originalname}`,
                transformation: [
                    { width: 1920, height: 600, crop: 'fill' },
                    { fetch_format: 'auto', quality: 'auto' },
                ],
            });
            const imageUrl = uploadResult.secure_url;
            await this.prisma.investorProfile.update({
                where: { id: investorId },
                data: { banner_image_url: imageUrl },
            });
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'Investor banner image uploaded successfully',
                imageUrl,
            };
        }
        catch (error) {
            console.error('Error uploading investor banner image:', error);
            return {
                success: false,
                message: 'Error uploading investor banner image',
                error: error.message,
            };
        }
    }
    async uploadStartupDocument(file, documentType, startupId) {
        try {
            const url = `https://api.telegram.org/bot${this.telegramBotToken}/sendDocument`;
            const formData = new FormData();
            formData.append('chat_id', this.telegramChatId);
            formData.append('document', fs.createReadStream(file.path), file.originalname);
            const response = await axios_1.default.post(url, formData, {
                headers: formData.getHeaders(),
            });
            const fileId = response.data.result.document.file_id;
            const getFileUrl = `https://api.telegram.org/bot${this.telegramBotToken}/getFile?file_id=${fileId}`;
            const fileResponse = await axios_1.default.get(getFileUrl);
            const filePath = fileResponse.data.result.file_path;
            const documentUrl = `https://api.telegram.org/file/bot${this.telegramBotToken}/${fileId}`;
            await this.saveStartupDocumentUrl(documentUrl, documentType, startupId);
            fs.unlink(file.path, (err) => {
                if (err) {
                    console.error(`Error deleting file: ${file.path}`, err);
                }
                else {
                    console.log(`Successfully deleted file: ${file.path}`);
                }
            });
            return {
                success: true,
                message: 'Document uploaded successfully',
                documentUrl,
            };
        }
        catch (error) {
            console.error('Error uploading document:', error);
            return {
                success: false,
                message: 'Error uploading document',
                error: error.message,
            };
        }
    }
    async saveStartupDocumentUrl(documentUrl, documentType, startupId) {
        await this.prisma.document.create({
            data: {
                document_url: documentUrl,
                document_type: documentType,
                startup: { connect: { id: startupId } },
            },
        });
    }
    async downloadStartupDocs(documentId) {
        try {
            const document = await this.prisma.document.findUnique({
                where: { id: documentId },
            });
            if (!document) {
                throw new Error('Document not found');
            }
            const documentUrl = document.document_url;
            const filePathParts = documentUrl.split('/');
            const fileNameWithSuffix = filePathParts[filePathParts.length - 1];
            const fileId = fileNameWithSuffix.split('-')[0];
            console.log(`Extracted file ID: ${fileId}`);
            const getFileUrl = `https://api.telegram.org/bot${this.telegramBotToken}/getFile?file_id=${fileId}`;
            console.log(`getFileUrl: ${getFileUrl}`);
            const fileResponse = await axios_1.default.get(getFileUrl);
            console.log(`fileResponse: ${JSON.stringify(fileResponse.data)}`);
            if (!fileResponse.data.ok) {
                throw new Error('Failed to retrieve file details from Telegram API');
            }
            const telegramFilePath = fileResponse.data.result.file_path;
            const originalFileName = telegramFilePath.split('/').pop();
            const downloadUrl = `https://api.telegram.org/file/bot${this.telegramBotToken}/${telegramFilePath}`;
            console.log(`downloadUrl: ${downloadUrl}`);
            const response = await axios_1.default.get(downloadUrl, { responseType: 'stream' });
            const localFilePath = `./downloads/${originalFileName}`;
            const writer = fs.createWriteStream(localFilePath);
            response.data.pipe(writer);
            return new Promise((resolve, reject) => {
                writer.on('finish', () => resolve({ filePath: localFilePath, originalFileName }));
                writer.on('error', reject);
            });
        }
        catch (error) {
            console.error('Error downloading document:', error.message);
            throw new Error('Error downloading document');
        }
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], UploadService);
//# sourceMappingURL=upload.service.js.map