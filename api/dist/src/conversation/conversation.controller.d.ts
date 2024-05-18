import { PrismaService } from '../prisma/prisma.service';
import { Conversation } from '@prisma/client';
export declare class ConversationController {
    private prisma;
    constructor(prisma: PrismaService);
    createConversation(req: any, body: {
        participantIds: number[];
    }): Promise<Conversation>;
    getConversation(id: number, req: any): Promise<Conversation>;
    getConversations(req: any): Promise<Conversation[]>;
}
