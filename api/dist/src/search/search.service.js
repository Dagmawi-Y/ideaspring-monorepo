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
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SearchService = class SearchService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async searchStartups(query) {
        if (query.length < 3) {
            return { error: 'Search query must be at least 3 characters' };
        }
        const startups = await this.prisma.startup.findMany({
            where: {
                OR: [
                    { pitch_title: { contains: query } },
                    { website: { contains: query } },
                    { location: { contains: query } },
                    {
                        industry_1: {
                            industry_name: { contains: query },
                        },
                    },
                    {
                        industry_2: {
                            industry_name: { contains: query },
                        },
                    },
                    {
                        stage: {
                            stage_name: { contains: query },
                        },
                    },
                    {
                        ideal_investor_role: {
                            role_name: { contains: query },
                        },
                    },
                    {
                        tax_relief: {
                            relief_name: { contains: query },
                        },
                    },
                ],
            },
            include: {
                industry_1: true,
                industry_2: true,
                stage: true,
                ideal_investor_role: true,
                tax_relief: true,
                pitch_deal: true,
                deal_details: true,
                team_members: true,
                images_videos: true,
                documents: true,
                upvotes: {
                    include: {
                        user: true,
                    },
                },
                Interest: true,
            },
            orderBy: {
                _relevance: { fields: ['pitch_title'], sort: 'desc', search: query },
            },
        });
        if (startups.length === 0) {
            return { message: 'No matching entries found in the database' };
        }
        console.log({ startups });
        return startups;
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SearchService);
//# sourceMappingURL=search.service.js.map