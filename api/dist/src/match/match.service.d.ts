import { PrismaService } from 'src/prisma/prisma.service';
export declare class MatchService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    getRecommendedStartups(investorId: number, limit: number): Promise<({
        stage: {
            id: number;
            stage_name: string;
            created_at: Date;
        };
        industry_1: {
            id: number;
            industry_name: string;
            created_at: Date;
        };
        industry_2: {
            id: number;
            industry_name: string;
            created_at: Date;
        };
    } & {
        id: number;
        user_id: number;
        pitch_title: string;
        website: string;
        location: string;
        mobile_number: string;
        industry_1_id: number;
        industry_2_id: number;
        stage_id: number;
        ideal_investor_role_id: number;
        previous_round_amount: number;
        total_raising_amount: number;
        raised_amount: number;
        minimum_investment: number;
        tax_relief_id: number;
        impression_count: number;
        created_at: Date;
    })[]>;
    private matchStartupWithInvestor;
    private scoreStartup;
}
