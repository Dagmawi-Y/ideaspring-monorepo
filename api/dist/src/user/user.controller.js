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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const decorator_1 = require("../auth/decorator");
const guard_1 = require("../auth/guard");
const user_service_1 = require("./user.service");
const revoked_token_guard_1 = require("../auth/guard/revoked_token.guard");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUserProfile(user) {
        const userId = user.id;
        return this.userService.getUserProfile(userId);
    }
    updateUserProfile(user, req) {
        const userId = user.id;
        const data = req.body;
        return this.userService.updateUserProfile(userId, data);
    }
    deleteUserProfile(user) {
        const userId = user.id;
        return this.userService.deleteUserProfile(userId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the current user profile' }),
    (0, swagger_1.ApiOkResponse)({ description: 'User profile retrieved successfully.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the current user profile' }),
    (0, swagger_1.ApiOkResponse)({ description: 'User profile updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUserProfile", null);
__decorate([
    (0, common_1.Delete)('profile'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete the current user profile' }),
    (0, swagger_1.ApiOkResponse)({ description: 'User profile deleted successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'User not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteUserProfile", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtGuard, revoked_token_guard_1.RevokedTokenGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map