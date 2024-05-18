import { Server, Socket } from 'socket.io';
import { PrismaService } from '../prisma/prisma.service';
export declare class ChatGateway {
    private prisma;
    server: Server;
    constructor(prisma: PrismaService);
    joinRoom(data: {
        conversationId: string;
    }, socket: Socket): Promise<void>;
    sendMessage(data: {
        conversationId: number;
        content: string;
    }, socket: Socket): Promise<void>;
}
