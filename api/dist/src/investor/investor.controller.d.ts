import { InvestorService } from './investor.service';
import * as dto from './dto/index';
export declare class InvestorController {
    private investorService;
    constructor(investorService: InvestorService);
    getShortlistedInvestors(userId: number): Promise<({
        investorProfile: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            profile_image_url: string;
            banner_image_url: string;
            town_city: string;
            country: string;
            phone_number: string;
            mobile_number: string;
            linkedin_profile: string;
            twitter_profile: string;
            facebook_profile: string;
            website: string;
            skype: string;
            about_me: string;
            created_at: Date;
            investor_id: number;
        };
        interested_countries: {
            id: number;
            country_name: string;
            created_at: Date;
            investor_id: number;
        }[];
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        investorTypeId: number;
    })[]>;
    getInvestorById(id: number): Promise<{
        investorProfile: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            profile_image_url: string;
            banner_image_url: string;
            town_city: string;
            country: string;
            phone_number: string;
            mobile_number: string;
            linkedin_profile: string;
            twitter_profile: string;
            facebook_profile: string;
            website: string;
            skype: string;
            about_me: string;
            created_at: Date;
            investor_id: number;
        };
        investorCompanyProfile: {
            id: number;
            company: string;
            position: string;
            company_description: string;
            company_website: string;
            created_at: Date;
            investor_id: number;
        };
        investorInterests: {
            id: number;
            investment_criteria: string;
            areas_of_expertise: string;
            value_addition: string;
            number_of_investments: number;
            created_at: Date;
            investor_id: number;
        };
        interested_locations: {
            id: number;
            location_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_stages: {
            id: number;
            stage_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_industries: {
            id: number;
            industry_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_countries: {
            id: number;
            country_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        spoken_languages: {
            id: number;
            language_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        InvestorType: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        investorTypeId: number;
    }>;
    shortlistInvestor(investorId: string, userId: number): Promise<{
        message: string;
        shortlist: {
            id: number;
            user_id: number;
            investor_id: number;
            created_at: Date;
        };
    }>;
    getInvestors(): Promise<({
        investorProfile: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
            profile_image_url: string;
            banner_image_url: string;
            town_city: string;
            country: string;
            phone_number: string;
            mobile_number: string;
            linkedin_profile: string;
            twitter_profile: string;
            facebook_profile: string;
            website: string;
            skype: string;
            about_me: string;
            created_at: Date;
            investor_id: number;
        };
        investorCompanyProfile: {
            id: number;
            company: string;
            position: string;
            company_description: string;
            company_website: string;
            created_at: Date;
            investor_id: number;
        };
        investorInterests: {
            id: number;
            investment_criteria: string;
            areas_of_expertise: string;
            value_addition: string;
            number_of_investments: number;
            created_at: Date;
            investor_id: number;
        };
        interested_locations: {
            id: number;
            location_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_stages: {
            id: number;
            stage_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_industries: {
            id: number;
            industry_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        interested_countries: {
            id: number;
            country_name: string;
            created_at: Date;
            investor_id: number;
        }[];
        spoken_languages: {
            id: number;
            language_name: string;
            created_at: Date;
            investor_id: number;
        }[];
    } & {
        id: number;
        created_at: Date;
        user_id: number;
        investorTypeId: number;
    })[]>;
    updateInvestorProfile(investorId: number, investorProfileDto: dto.InvestorProfileDto): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        profile_image_url: string;
        banner_image_url: string;
        town_city: string;
        country: string;
        phone_number: string;
        mobile_number: string;
        linkedin_profile: string;
        twitter_profile: string;
        facebook_profile: string;
        website: string;
        skype: string;
        about_me: string;
        created_at: Date;
        investor_id: number;
    }>;
    updateInvestorCompanyProfile(investorId: number, investorCompanyProfileDto: dto.InvestorCompanyProfileDto): Promise<{
        id: number;
        company: string;
        position: string;
        company_description: string;
        company_website: string;
        created_at: Date;
        investor_id: number;
    }>;
    updateInvestorInterests(investorId: number, investorInterestsDto: dto.InvestorInterestsDto): Promise<{
        id: number;
        investment_criteria: string;
        areas_of_expertise: string;
        value_addition: string;
        number_of_investments: number;
        created_at: Date;
        investor_id: number;
    }>;
    addInvestedLocation(investorId: number, investedLocationDto: dto.InvestedLocationDto): Promise<{
        id: number;
        location_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addInvestedStage(investorId: number, investedStageDto: dto.InvestedStageDto): Promise<{
        id: number;
        stage_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addInvestedIndustry(investorId: number, investedIndustryDto: dto.InvestedIndustryDto): Promise<{
        id: number;
        industry_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addInvestedCountry(investorId: number, investedCountryDto: dto.InvestedCountryDto): Promise<{
        id: number;
        country_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addLanguage(investorId: number, languageDto: dto.LanguageDto): Promise<{
        id: number;
        language_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addKeyword(investorId: number, keywordDto: dto.KeywordDto): Promise<{
        id: number;
        keyword_name: string;
        created_at: Date;
        investor_id: number;
    }>;
    addInvestorCompany(investorId: number, investorCompanyDto: dto.InvestorCompanyDto): Promise<{
        id: number;
        company_name: string;
        invested_amount: number;
        created_at: Date;
        investor_id: number;
        industry_id: number;
        stage_id: number;
    }>;
    addInvestorType(investorId: number, investorTypeName: string): Promise<{
        id: number;
        created_at: Date;
        user_id: number;
        investorTypeId: number;
    }>;
}
