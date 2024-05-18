export declare class InvestorProfileDto {
    first_name: string;
    last_name: string;
    profile_image_url?: string;
    banner_image_url?: string;
    town_city?: string;
    country?: string;
    phone_number?: string;
    mobile_number?: string;
    linkedin_profile?: string;
    twitter_profile?: string;
    facebook_profile?: string;
    website?: string;
    skype?: string;
    about_me?: string;
}
export declare class InvestorCompanyProfileDto {
    company?: string;
    position?: string;
    company_description?: string;
    company_website?: string;
}
export declare class InvestorInterestsDto {
    investment_criteria?: string;
    areas_of_expertise?: string;
    value_addition?: string;
    number_of_investments?: number;
}
export declare class InvestedLocationDto {
    location_name: string;
}
export declare class InvestedStageDto {
    stage_name: string;
}
export declare class InvestedIndustryDto {
    industry_name: string;
}
export declare class InvestedCountryDto {
    country_name: string;
}
export declare class LanguageDto {
    language_name: string;
}
export declare class KeywordDto {
    keyword_name: string;
}
export declare class InvestorCompanyDto {
    company_name: string;
    invested_amount?: number;
    industry_id?: number;
    stage_id?: number;
}
