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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_socket_guard_1 = require("../auth/guard/jwt_socket.guard");
const common_1 = require("@nestjs/common");
let ChatGateway = class ChatGateway {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async joinRoom(data, socket) {
        const { conversationId } = data;
        const client = socket.client;
        console.log({
            client,
        });
        const userId = 1;
        socket.join(`conversation-${conversationId}`);
        const conversation = await this.prisma.conversation.findUnique({
            where: { id: parseInt(conversationId) },
            include: {
                messages: {
                    include: {
                        sender: true,
                    },
                    orderBy: {
                        created_at: 'asc',
                    },
                },
                participants: true,
            },
        });
        const isParticipant = conversation.participants.some((participant) => participant.id === userId);
        if (!isParticipant) {
            socket.emit('error', 'You are not a participant in this conversation');
            return;
        }
        socket.emit('conversationJoined', {
            conversation,
            messages: conversation.messages.map((message) => ({
                id: message.id,
                sender: message.sender,
                content: message.content,
                created_at: message.created_at,
            })),
        });
    }
    async sendMessage(data, socket) {
        const { conversationId, content } = data;
        const senderId = 1;
        const newMessage = await this.prisma.message.create({
            data: {
                sender: { connect: { id: senderId } },
                conversation: { connect: { id: conversationId } },
                content,
            },
        });
        this.server
            .to(`conversation-${conversationId}`)
            .emit('newMessage', newMessage);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinRoom'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "joinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "sendMessage", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: '*' } }),
    (0, common_1.UseGuards)(jwt_socket_guard_1.JwtSocketGuard),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map