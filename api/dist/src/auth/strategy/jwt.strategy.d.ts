import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
        role: string;
    }): Promise<{
        id: number;
        email: string;
        role: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        };
    }>;
}
export {};
