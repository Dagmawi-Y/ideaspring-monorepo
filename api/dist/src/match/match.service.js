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
var MatchService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MatchService = MatchService_1 = class MatchService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(MatchService_1.name);
    }
    async getRecommendedStartups(investorId, limit) {
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
            include: {
                interested_locations: true,
                interested_stages: true,
                interested_industries: true,
                investorInterests: true,
                InvestorType: true,
            },
        });
        if (!investor) {
            return [];
        }
        this.logger.log(`Investor preferences: ${JSON.stringify(investor)}`);
        const startups = await this.prisma.startup.findMany({
            include: {
                industry_1: true,
                industry_2: true,
                stage: true,
            },
        });
        const matchedStartups = startups.filter((startup) => this.matchStartupWithInvestor(startup, investor));
        this.logger.log(`Matched startups: ${matchedStartups.length}`);
        const recommendedStartups = matchedStartups
            .map((startup) => ({
            startup,
            score: this.scoreStartup(startup, investor),
        }))
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(({ startup }) => startup);
        return recommendedStartups;
    }
    matchStartupWithInvestor(startup, investor) {
        const matchesIndustry = investor.interested_industries.some((industry) => industry.industry_name === startup.industry_1?.industry_name ||
            industry.industry_name === startup.industry_2?.industry_name) || false;
        const matchesStage = investor.interested_stages.some((stage) => stage.stage_name === startup.stage?.stage_name);
        const matchesLocation = investor.interested_locations.some((location) => location.location_name === startup.location);
        const matchesFundingCriteria = investor.InvestorType.name === 'Angel Investor' ||
            investor.investorInterests.investment_criteria.includes('Series A') ||
            investor.investorInterests.investment_criteria.includes('Series B');
        return (matchesIndustry ||
            matchesStage ||
            matchesLocation ||
            matchesFundingCriteria);
    }
    scoreStartup(startup, investor) {
        let score = 0;
        if (investor.interested_industries.some((industry) => industry.industry_name === startup.industry_1?.industry_name)) {
            score += 0.4;
        }
        if (investor.interested_industries.some((industry) => industry.industry_name === startup.industry_2?.industry_name)) {
            score += 0.2;
        }
        if (investor.interested_stages.some((stage) => stage.stage_name === startup.stage?.stage_name)) {
            score += 0.3;
        }
        if (investor.interested_locations.some((location) => location.location_name === startup.location)) {
            score += 0.1;
        }
        if (investor.InvestorType.name === 'Angel Investor' ||
            investor.investorInterests.investment_criteria.includes('Series A') ||
            investor.investorInterests.investment_criteria.includes('Series B')) {
            score += 0.2;
        }
        this.logger.log(`Score for startup ${startup.id}: ${score}`);
        return score;
    }
};
exports.MatchService = MatchService;
exports.MatchService = MatchService = MatchService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MatchService);
//# sourceMappingURL=match.service.js.map