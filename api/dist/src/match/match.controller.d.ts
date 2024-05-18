import { MatchService } from './match.service';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    getRecommendedStartups(investorId: string, limit?: number): Promise<({
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
}
