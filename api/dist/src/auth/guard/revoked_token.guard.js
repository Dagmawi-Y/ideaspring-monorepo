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
exports.RevokedTokenGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const passport_jwt_1 = require("passport-jwt");
let RevokedTokenGuard = class RevokedTokenGuard {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        const revokedToken = await this.prisma.revokedToken.findUnique({
            where: { token },
        });
        if (revokedToken) {
            throw new common_1.UnauthorizedException('Token has been revoked');
        }
        return true;
    }
};
exports.RevokedTokenGuard = RevokedTokenGuard;
exports.RevokedTokenGuard = RevokedTokenGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RevokedTokenGuard);
//# sourceMappingURL=revoked_token.guard.js.map