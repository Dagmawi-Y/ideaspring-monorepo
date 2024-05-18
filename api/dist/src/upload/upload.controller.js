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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const upload_service_1 = require("./upload.service");
const guard_1 = require("../auth/guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadStartupVideo(file, startupId, res) {
        try {
            const result = await this.uploadService.uploadStartupVideo(file, parseInt(startupId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading video', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadStartupImage(file, startupId, res) {
        try {
            const result = await this.uploadService.uploadStartupImage(file, parseInt(startupId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadUserProfileImage(file, userId, res) {
        try {
            const result = await this.uploadService.uploadUserProfileImage(file, parseInt(userId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading user profile image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadUserBannerImage(file, userId, res) {
        try {
            const result = await this.uploadService.uploadUserBannerImage(file, parseInt(userId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading user banner image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadInvestorProfileImage(file, investorId, res) {
        try {
            const result = await this.uploadService.uploadInvestorProfileImage(file, parseInt(investorId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading investor profile image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadInvestorBannerImage(file, investorId, res) {
        try {
            const result = await this.uploadService.uploadInvestorBannerImage(file, parseInt(investorId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading investor banner image', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async uploadStartupDocument(file, startupId, documentType, res) {
        try {
            const result = await this.uploadService.uploadStartupDocument(file, documentType, parseInt(startupId));
            return res.status(common_1.HttpStatus.OK).json(result);
        }
        catch (error) {
            throw new common_1.HttpException('Error uploading document', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async downloadStartupDocs(documentId, res) {
        try {
            const { filePath, originalFileName } = await this.uploadService.downloadStartupDocs(parseInt(documentId));
            res.setHeader('Content-Disposition', `attachment; filename="${originalFileName}"`);
            res.sendFile(filePath, { root: './' });
        }
        catch (error) {
            throw new common_1.HttpException('Error downloading document', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, common_1.Post)('video/:startupId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('video', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/videos',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('startupId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadStartupVideo", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, common_1.Post)('image/:startupId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/images',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('startupId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadStartupImage", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)('user/profile-image/:userId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/user_profile_images',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadUserProfileImage", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('user'),
    (0, common_1.Post)('user/banner-image/:userId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/user_banner_images',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadUserBannerImage", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)('investor/profile-image/:investorId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/investor_profile_images',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('investorId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadInvestorProfileImage", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)('investor/banner-image/:investorId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/investor_banner_images',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, file.originalname + '-' + uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('investorId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadInvestorBannerImage", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, common_1.Post)('document/:startupId/:documentType'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('document', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/documents',
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('startupId')),
    __param(2, (0, common_1.Param)('documentType')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadStartupDocument", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, common_1.Get)('document/:documentId'),
    __param(0, (0, common_1.Param)('documentId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "downloadStartupDocs", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('uploads'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map