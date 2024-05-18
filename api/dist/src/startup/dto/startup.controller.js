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
exports.StartupController = void 0;
const common_1 = require("@nestjs/common");
const _1 = require(".");
const startup_service_1 = require("../startup.service");
const guard_1 = require("../../auth/guard");
const roles_guard_1 = require("../../auth/guard/roles.guard");
const roles_decorator_1 = require("../../auth/decorator/roles.decorator");
const decorator_1 = require("../../auth/decorator");
const updateStartup_dto_1 = require("./updateStartup.dto");
const investor_service_1 = require("../../investor/investor.service");
const swagger_1 = require("@nestjs/swagger");
let StartupController = class StartupController {
    constructor(startupService, investorService) {
        this.startupService = startupService;
        this.investorService = investorService;
    }
    async createStartup(createStartupDto, req) {
        const userId = req.user.id;
        return this.startupService.createStartup(createStartupDto, userId);
    }
    getMyStartups(userId) {
        return this.startupService.getMyStartups(userId);
    }
    getStartupById(id) {
        return this.startupService.getStartupById(id);
    }
    updateStartup(id, updateStartupDto, userId) {
        return this.startupService.updateStartup(parseInt(id, 10), updateStartupDto, userId);
    }
    deleteStartup(id, userId) {
        return this.startupService.deleteStartup(parseInt(id, 10), userId);
    }
    async getAllStartups() {
        return this.startupService.getAllStartups();
    }
    async showInterest(id, startupId) {
        const userId = id;
        return this.startupService.showInterest(userId, startupId);
    }
    async updateTeamMembers(id, teamMembers, userId) {
        return this.startupService.updateTeamMembers(parseInt(id, 10), teamMembers, userId);
    }
    async updateDealDetails(id, dealDetails, userId) {
        return this.startupService.updateDealDetails(parseInt(id, 10), dealDetails, userId);
    }
    async updatePitchDeal(id, pitchDeal, userId) {
        return this.startupService.updatePitchDeal(parseInt(id, 10), pitchDeal, userId);
    }
    async toggleUpvote(id, userId) {
        return this.startupService.toggleUpvote(parseInt(id, 10), userId);
    }
    async commentOnStartup(id, comment, userId) {
        return this.startupService.commentOnStartup(parseInt(id, 10), comment, userId);
    }
    async replyToComment(id, commentId, reply, userId) {
        return this.startupService.replyToComment(parseInt(id, 10), parseInt(commentId, 10), reply, userId);
    }
    async getCommentReplies(id, commentId) {
        return this.startupService.getCommentReplies(parseInt(commentId, 10));
    }
    async shortlistStartup(startupId, investorId) {
        return this.startupService.shortlistStartup(parseInt(startupId, 10), investorId);
    }
    async getShortlistedStartups(investorId) {
        return this.startupService.getShortlistedStartups(investorId);
    }
};
exports.StartupController = StartupController;
__decorate([
    (0, common_1.Post)('add'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new startup' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Startup created successfully.',
        type: _1.CreateStartupDto,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an entrepreneur.',
    }),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_1.CreateStartupDto, Object]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "createStartup", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Get startups created by the current user' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Startups retrieved successfully.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an entrepreneur.',
    }),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StartupController.prototype, "getMyStartups", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor', 'engager', 'admin'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a startup by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Startup retrieved successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must have appropriate role (entrepreneur, investor, engager, or admin).',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StartupController.prototype, "getStartupById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup to update' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Startup updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be the creator of the startup.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateStartup_dto_1.UpdateStartupDto, Number]),
    __metadata("design:returntype", void 0)
], StartupController.prototype, "updateStartup", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup to delete' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Startup deleted successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be the creator of the startup.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], StartupController.prototype, "deleteStartup", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a list of all startups' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Startups retrieved successfully.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "getAllStartups", null);
__decorate([
    (0, common_1.Post)(':id/interest'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Express interest in a startup as an investor' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Interest expressed successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor or startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "showInterest", null);
__decorate([
    (0, common_1.Put)(':id/team'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the team members for a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Team members updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be the creator of the startup.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "updateTeamMembers", null);
__decorate([
    (0, common_1.Put)(':id/deal-details'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the deal details for a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Deal details updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be the creator of the startup.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "updateDealDetails", null);
__decorate([
    (0, common_1.Put)(':id/pitch-deal'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Update the pitch deal for a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Pitch deal updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be the creator of the startup.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "updatePitchDeal", null);
__decorate([
    (0, common_1.Post)(':id/upvote'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor', 'engager'),
    (0, swagger_1.ApiOperation)({ summary: 'Upvote or remove upvote for a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Upvote status updated successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must have the appropriate role.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "toggleUpvote", null);
__decorate([
    (0, common_1.Post)(':id/comment'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor', 'engager'),
    (0, swagger_1.ApiOperation)({ summary: 'Comment on a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiBody)({ type: String, description: 'The comment text' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Comment added successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must have the appropriate role.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('comment')),
    __param(2, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "commentOnStartup", null);
__decorate([
    (0, common_1.Post)(':id/comment/:commentId/reply'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor', 'engager'),
    (0, swagger_1.ApiOperation)({ summary: 'Reply to a comment on a startup' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiParam)({
        name: 'commentId',
        description: 'The ID of the comment to reply to',
    }),
    (0, swagger_1.ApiBody)({ type: String, description: 'The reply text' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Reply added successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup or comment not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must have the appropriate role.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('commentId')),
    __param(2, (0, common_1.Body)('reply')),
    __param(3, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "replyToComment", null);
__decorate([
    (0, common_1.Get)(':id/comment/:commentId/replies'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor', 'engager', 'admin'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all replies for a specific comment on a startup',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiParam)({ name: 'commentId', description: 'The ID of the comment' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Replies retrieved successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup or comment not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must have the appropriate role.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "getCommentReplies", null);
__decorate([
    (0, common_1.Post)(':id/shortlist'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Shortlist a startup as an investor' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the startup' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Startup shortlisted successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Startup or investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an investor.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "shortlistStartup", null);
__decorate([
    (0, common_1.Get)('shortlisted'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all shortlisted startups for an investor' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Shortlisted startups retrieved successfully.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an investor.',
    }),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StartupController.prototype, "getShortlistedStartups", null);
exports.StartupController = StartupController = __decorate([
    (0, swagger_1.ApiTags)('Startups'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('startups'),
    __metadata("design:paramtypes", [startup_service_1.StartupService,
        investor_service_1.InvestorService])
], StartupController);
//# sourceMappingURL=startup.controller.js.map