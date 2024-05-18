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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserProfile(userId) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            const { password, ...userInfo } = user;
            console.log({
                userInfo,
            });
            return userInfo;
        }
        catch (error) {
            throw new Error('Failed to retrieve user profile');
        }
    }
    async updateUserProfile(userId, data) {
        try {
            const { city_id, country_id, ...otherData } = data;
            const currentUser = await this.prisma.user.findUnique({
                where: { id: userId },
                include: { city: true, country: true },
            });
            const cityExists = await this.prisma.city.findUnique({
                where: { id: city_id },
            });
            if (city_id && !cityExists) {
                throw new Error(`City with ID ${city_id} does not exist`);
            }
            const isCurrentlyAssociatedWithCity = currentUser.city?.id === city_id;
            const updatedUser = await this.prisma.user.update({
                where: { id: userId },
                data: {
                    ...otherData,
                    city: city_id
                        ? { connect: { id: city_id } }
                        : isCurrentlyAssociatedWithCity
                            ? { disconnect: true }
                            : undefined,
                    country: country_id
                        ? { connect: { id: country_id } }
                        : { disconnect: true },
                },
            });
            const { password, ...userInfo } = updatedUser;
            return userInfo;
        }
        catch (error) {
            console.error('Failed to update user profile:', error);
            throw new Error('Failed to update user profile');
        }
    }
    async deleteUserProfile(userId) {
        await this.prisma.user.delete({
            where: { id: userId },
        });
        return { message: 'User profile deleted successfully' };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map