import { PrismaService } from '../prisma/prisma.service';
import { CreateStartupDto } from './dto';
import { UpdateStartupDto } from './dto/updateStartup.dto';
import { DealDetails, PitchDeal, Team } from '@prisma/client';
export declare class StartupService {
    private prisma;
    constructor(prisma: PrismaService);
    createStartup(createStartupDto: CreateStartupDto, userId: number): Promise<{
        msg: string;
        startup_id: number;
        startup_name: string;
    }>;
    getMyStartups(userId: number): Promise<{
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
    }[]>;
    getStartupById(id: number): Promise<{
        comments: {
            id: number;
            user_id: number;
            startup_id: number;
            comment: string;
            created_at: Date;
            parentId: number;
        }[];
        upvotes: {
            id: number;
            user_id: number;
            startup_id: number;
            created_at: Date;
        }[];
        stage: {
            id: number;
            stage_name: string;
            created_at: Date;
        };
        mlRecommendations: {
            id: number;
            startup_id: number;
            investor_id: number;
            score: number;
            created_at: Date;
        }[];
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
        ideal_investor_role: {
            id: number;
            role_name: string;
            created_at: Date;
        };
        tax_relief: {
            id: number;
            relief_name: string;
            created_at: Date;
        };
        pitch_deal: {
            startup_id: number;
            short_summary: string;
            business_description: string;
            market_description: string;
            progress_proof: string;
            objectives_future: string;
            highlights: string;
            created_at: Date;
        };
        deal_details: {
            startup_id: number;
            deal_type: string;
            deal_description: string;
            created_at: Date;
        };
        team_members: {
            id: number;
            startup_id: number;
            team_member_name: string;
            linkedin_profile: string;
            position: string;
            bio: string;
            created_at: Date;
        }[];
        images_videos: {
            id: number;
            startup_id: number;
            image_url: string;
            video_url: string;
            created_at: Date;
        }[];
        documents: {
            id: number;
            startup_id: number;
            document_type: string;
            document_url: string;
            created_at: Date;
        }[];
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
    }>;
    updateStartup(id: number, dto: UpdateStartupDto, userId: number): Promise<{
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
    }>;
    deleteStartup(id: number, userId: number): Promise<{
        message: string;
    }>;
    getAllStartups(): Promise<{
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
    }[]>;
    showInterest(userId: number, startupId: number): Promise<{
        id: number;
        userId: number;
        startupId: number;
        createdAt: Date;
    } | {
        error: string;
    }>;
    updateTeamMembers(startupId: number, teamMembers: Team[], userId: number): Promise<{
        id: number;
        startup_id: number;
        team_member_name: string;
        linkedin_profile: string;
        position: string;
        bio: string;
        created_at: Date;
    }[]>;
    updateDealDetails(startupId: number, dealDetails: DealDetails, userId: number): Promise<{
        startup_id: number;
        deal_type: string;
        deal_description: string;
        created_at: Date;
    }>;
    updatePitchDeal(startupId: number, pitchDeal: PitchDeal, userId: number): Promise<{
        startup_id: number;
        short_summary: string;
        business_description: string;
        market_description: string;
        progress_proof: string;
        objectives_future: string;
        highlights: string;
        created_at: Date;
    }>;
    toggleUpvote(startupId: number, userId: number): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    }>;
    commentOnStartup(startupId: number, comment: string, userId: number): Promise<{
        id: number;
        user_id: number;
        startup_id: number;
        comment: string;
        created_at: Date;
        parentId: number;
    } | {
        error: string;
    }>;
    replyToComment(startupId: number, commentId: number, reply: string, userId: number): Promise<({
        parent: {
            id: number;
            user_id: number;
            startup_id: number;
            comment: string;
            created_at: Date;
            parentId: number;
        };
        replies: {
            id: number;
            user_id: number;
            startup_id: number;
            comment: string;
            created_at: Date;
            parentId: number;
        }[];
    } & {
        id: number;
        user_id: number;
        startup_id: number;
        comment: string;
        created_at: Date;
        parentId: number;
    }) | {
        error: string;
    }>;
    getCommentReplies(commentId: number): Promise<({} & {
        id: number;
        user_id: number;
        startup_id: number;
        comment: string;
        created_at: Date;
        parentId: number;
    })[]>;
    shortlistStartup(startupId: number, investorId: number): Promise<{
        message: string;
        shortlist: {
            id: number;
            investor_id: number;
            startup_id: number;
            created_at: Date;
        };
    }>;
    getShortlistedStartups(investorId: number): Promise<({
        user: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            profile_image_url: string;
            banner_image_url: string;
            town: string;
            city_id: number;
            country_id: number;
            phone_number: string;
            mobile_number: string;
            bio: string;
            created_at: Date;
            investor_id: number;
            isEmailVerified: boolean;
            verificationToken: string;
            pwResetToken: string;
            pwResetTokenExpiry: Date;
        };
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
        ideal_investor_role: {
            id: number;
            role_name: string;
            created_at: Date;
        };
        tax_relief: {
            id: number;
            relief_name: string;
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
