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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorCompanyDto = exports.KeywordDto = exports.LanguageDto = exports.InvestedCountryDto = exports.InvestedIndustryDto = exports.InvestedStageDto = exports.InvestedLocationDto = exports.InvestorInterestsDto = exports.InvestorCompanyProfileDto = exports.InvestorProfileDto = void 0;
const class_validator_1 = require("class-validator");
class InvestorProfileDto {
}
exports.InvestorProfileDto = InvestorProfileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "profile_image_url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "banner_image_url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "town_city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "mobile_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "linkedin_profile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "twitter_profile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "facebook_profile", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "skype", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorProfileDto.prototype, "about_me", void 0);
class InvestorCompanyProfileDto {
}
exports.InvestorCompanyProfileDto = InvestorCompanyProfileDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorCompanyProfileDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorCompanyProfileDto.prototype, "position", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorCompanyProfileDto.prototype, "company_description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorCompanyProfileDto.prototype, "company_website", void 0);
class InvestorInterestsDto {
}
exports.InvestorInterestsDto = InvestorInterestsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorInterestsDto.prototype, "investment_criteria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorInterestsDto.prototype, "areas_of_expertise", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorInterestsDto.prototype, "value_addition", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvestorInterestsDto.prototype, "number_of_investments", void 0);
class InvestedLocationDto {
}
exports.InvestedLocationDto = InvestedLocationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestedLocationDto.prototype, "location_name", void 0);
class InvestedStageDto {
}
exports.InvestedStageDto = InvestedStageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestedStageDto.prototype, "stage_name", void 0);
class InvestedIndustryDto {
}
exports.InvestedIndustryDto = InvestedIndustryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestedIndustryDto.prototype, "industry_name", void 0);
class InvestedCountryDto {
}
exports.InvestedCountryDto = InvestedCountryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestedCountryDto.prototype, "country_name", void 0);
class LanguageDto {
}
exports.LanguageDto = LanguageDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LanguageDto.prototype, "language_name", void 0);
class KeywordDto {
}
exports.KeywordDto = KeywordDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], KeywordDto.prototype, "keyword_name", void 0);
class InvestorCompanyDto {
}
exports.InvestorCompanyDto = InvestorCompanyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], InvestorCompanyDto.prototype, "company_name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvestorCompanyDto.prototype, "invested_amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvestorCompanyDto.prototype, "industry_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], InvestorCompanyDto.prototype, "stage_id", void 0);
//# sourceMappingURL=investorProfile.dto.js.map