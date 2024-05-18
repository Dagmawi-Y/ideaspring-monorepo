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
exports.InvestorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let InvestorService = class InvestorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getInvestors() {
        return this.prisma.investor.findMany({
            include: {
                investorProfile: true,
                investorCompanyProfile: true,
                investorInterests: true,
                interested_locations: true,
                interested_stages: true,
                interested_industries: true,
                interested_countries: true,
                spoken_languages: true,
            },
        });
    }
    async getInvestorById(id) {
        const investor = await this.prisma.investor.findUnique({
            where: { id },
            include: {
                InvestorType: true,
                investorProfile: true,
                investorCompanyProfile: true,
                investorInterests: true,
                interested_locations: true,
                interested_stages: true,
                interested_industries: true,
                interested_countries: true,
                spoken_languages: true,
            },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${id} not found`);
        }
        return investor;
    }
    async shortlistInvestor(investorId, userId) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException('Investor not found');
        }
        const existingShortlist = await this.prisma.shortlistedInvestor.findUnique({
            where: {
                user_id_investor_id: {
                    user_id: userId,
                    investor_id: investorId,
                },
            },
        });
        if (existingShortlist) {
            throw new common_1.BadRequestException('Investor already shortlisted');
        }
        const shortlist = await this.prisma.shortlistedInvestor.create({
            data: {
                user_id: userId,
                investor_id: investorId,
            },
        });
        return { message: 'Investor shortlisted successfully', shortlist };
    }
    async getShortlistedInvestors(userId) {
        const shortlistedInvestors = await this.prisma.shortlistedInvestor.findMany({
            where: { user_id: userId },
            include: {
                investor: {
                    include: {
                        investorProfile: true,
                        interested_countries: true,
                    },
                },
            },
        });
        return shortlistedInvestors.map((item) => item.investor);
    }
    async updateInvestorProfile(investorId, investorProfileDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const updatedInvestorProfile = await this.prisma.investorProfile.update({
            where: { investor_id: investorId },
            data: investorProfileDto,
        });
        return updatedInvestorProfile;
    }
    async updateInvestorCompanyProfile(investorId, investorCompanyProfileDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const updatedInvestorCompanyProfile = await this.prisma.investorCompanyProfile.update({
            where: { investor_id: investorId },
            data: investorCompanyProfileDto,
        });
        return updatedInvestorCompanyProfile;
    }
    async updateInvestorInterests(investorId, investorInterestsDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const updatedInvestorInterests = await this.prisma.investorInterests.update({
            where: { investor_id: investorId },
            data: investorInterestsDto,
        });
        return updatedInvestorInterests;
    }
    async addInvestedLocation(investorId, investedLocationDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newInvestedLocation = await this.prisma.investedLocation.create({
            data: {
                investor_id: investorId,
                location_name: investedLocationDto.location_name,
            },
        });
        return newInvestedLocation;
    }
    async addInvestedStage(investorId, investedStageDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newInvestedStage = await this.prisma.investedStage.create({
            data: {
                ...investedStageDto,
                investor_id: investorId,
            },
        });
        return newInvestedStage;
    }
    async addInvestedIndustry(investorId, investedIndustryDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newInvestedIndustry = await this.prisma.investedIndustry.create({
            data: {
                ...investedIndustryDto,
                investor_id: investorId,
            },
        });
        return newInvestedIndustry;
    }
    async addInvestedCountry(investorId, investedCountryDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newInvestedCountry = await this.prisma.investedCountry.create({
            data: {
                ...investedCountryDto,
                investor_id: investorId,
            },
        });
        return newInvestedCountry;
    }
    async addLanguage(investorId, languageDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newLanguage = await this.prisma.language.create({
            data: {
                ...languageDto,
                investor_id: investorId,
            },
        });
        return newLanguage;
    }
    async addKeyword(investorId, keywordDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newKeyword = await this.prisma.keyword.create({
            data: {
                ...keywordDto,
                investor_id: investorId,
            },
        });
        return newKeyword;
    }
    async addInvestorCompany(investorId, investorCompanyDto) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const newInvestorCompany = await this.prisma.investorCompany.create({
            data: {
                ...investorCompanyDto,
                investor_id: investorId,
            },
        });
        return newInvestorCompany;
    }
    async addInvestorType(investorId, investorTypeName) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException(`Investor with ID ${investorId} not found`);
        }
        const investorType = await this.prisma.investorType.findUnique({
            where: { name: investorTypeName },
        });
        if (!investorType) {
            throw new common_1.NotFoundException(`Investor type "${investorTypeName}" not found`);
        }
        const updatedInvestor = await this.prisma.investor.update({
            where: { id: investorId },
            data: {
                InvestorType: {
                    connect: {
                        id: investorType.id,
                    },
                },
            },
        });
        return updatedInvestor;
    }
};
exports.InvestorService = InvestorService;
exports.InvestorService = InvestorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InvestorService);
//# sourceMappingURL=investor.service.js.map