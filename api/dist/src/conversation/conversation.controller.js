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
exports.ConversationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const guard_1 = require("../auth/guard");
const prisma_service_1 = require("../prisma/prisma.service");
let ConversationController = class ConversationController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createConversation(req, body) {
        const user = req.user;
        const participantIds = [...body.participantIds, user.id];
        const conversation = await this.prisma.conversation.create({
            data: {
                participants: {
                    connect: participantIds.map((id) => ({ id })),
                },
            },
            include: {
                participants: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                    },
                },
            },
        });
        return conversation;
    }
    async getConversation(id, req) {
        const user = req.user;
        return this.prisma.conversation.findFirst({
            where: {
                id,
                participants: {
                    some: {
                        id: user.id,
                    },
                },
            },
            include: {
                participants: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                    },
                },
                messages: {
                    include: {
                        sender: {
                            select: {
                                id: true,
                                first_name: true,
                                last_name: true,
                                ReadStatus: true,
                            },
                        },
                    },
                    orderBy: {
                        created_at: 'asc',
                    },
                },
            },
        });
    }
    async getConversations(req) {
        const user = req.user;
        return this.prisma.conversation.findMany({
            where: {
                participants: {
                    some: {
                        id: user.id,
                    },
                },
            },
            include: {
                participants: {
                    select: {
                        id: true,
                        first_name: true,
                        last_name: true,
                        ReadStatus: true,
                    },
                },
            },
        });
    }
};
exports.ConversationController = ConversationController;
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Post)('new'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new conversation' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Conversation created successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "createConversation", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific conversation by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Conversation retrieved successfully',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "getConversation", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all conversations for the current user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Conversations retrieved successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "getConversations", null);
exports.ConversationController = ConversationController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('Conversations'),
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConversationController);
//# sourceMappingURL=conversation.controller.js.map