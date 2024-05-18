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
exports.StartupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
let StartupService = class StartupService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createStartup(createStartupDto, userId) {
        const { pitchTitle, website, location, mobileNumber, industry1, industry2, stage, idealInvestorRole, previousRoundAmount, totalRaisingAmount, raisedAmount, minimumInvestment, taxRelief, } = createStartupDto;
        if (!userId) {
            throw new Error('userId is undefined');
        }
        const startup = await this.prisma.startup.create({
            data: {
                user: { connect: { id: userId } },
                pitch_title: pitchTitle,
                website,
                location,
                mobile_number: mobileNumber,
                industry_1: industry1 ? { connect: { id: industry1 } } : undefined,
                industry_2: industry2 ? { connect: { id: industry2 } } : undefined,
                stage: stage ? { connect: { id: stage } } : undefined,
                ideal_investor_role: idealInvestorRole
                    ? { connect: { id: idealInvestorRole } }
                    : undefined,
                previous_round_amount: previousRoundAmount,
                total_raising_amount: totalRaisingAmount,
                raised_amount: raisedAmount,
                minimum_investment: minimumInvestment,
                tax_relief: taxRelief ? { connect: { id: taxRelief } } : undefined,
            },
        });
        return {
            msg: 'Startup created successfully',
            startup_id: startup.id,
            startup_name: startup.pitch_title,
        };
    }
    async getMyStartups(userId) {
        const startups = await this.prisma.startup.findMany({
            where: { user_id: userId },
        });
        return startups;
    }
    async getStartupById(id) {
        const startup = await this.prisma.startup.findUnique({
            where: { id },
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
                comments: true,
                upvotes: true,
                mlRecommendations: true,
            },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        return startup;
    }
    async updateStartup(id, dto, userId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        if (startup.user_id !== userId) {
            throw new common_1.UnauthorizedException('You are not authorized to update this startup');
        }
        const updatedStartup = await this.prisma.startup.update({
            where: { id },
            data: {
                pitch_title: dto.pitchTitle,
                website: dto.website,
                location: dto.location,
                mobile_number: dto.mobileNumber,
                industry_1: dto.industry1
                    ? { connect: { id: dto.industry1 } }
                    : undefined,
                industry_2: dto.industry2
                    ? { connect: { id: dto.industry2 } }
                    : undefined,
                stage: dto.stage ? { connect: { id: dto.stage } } : undefined,
                ideal_investor_role: dto.idealInvestorRole
                    ? { connect: { id: dto.idealInvestorRole } }
                    : undefined,
                previous_round_amount: dto.previousRoundAmount,
                total_raising_amount: dto.totalRaisingAmount,
                raised_amount: dto.raisedAmount,
                minimum_investment: dto.minimumInvestment,
                tax_relief: dto.taxRelief
                    ? { connect: { id: dto.taxRelief } }
                    : undefined,
            },
        });
        return updatedStartup;
    }
    async deleteStartup(id, userId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        if (startup.user_id !== userId) {
            throw new common_1.UnauthorizedException('You are not authorized to delete this startup');
        }
        await this.prisma.startup.delete({
            where: { id },
        });
        return { message: 'Startup deleted successfully' };
    }
    async getAllStartups() {
        const startups = await this.prisma.startup.findMany({});
        return startups;
    }
    async showInterest(userId, startupId) {
        try {
            const interest = await this.prisma.interest.create({
                data: {
                    userId,
                    startupId,
                },
            });
            return interest;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2003') {
                console.error('Foreign key constraint violation:', error);
                return {
                    error: 'Invalid startup ID. The specified startup does not exist.',
                };
            }
            else if (error instanceof library_1.PrismaClientValidationError &&
                error.message.includes('Expected Int, provided String')) {
                console.error('Invalid input type for startupId. Expected a number.');
                return {
                    error: 'Invalid startup ID. Please provide a valid numerical ID.',
                };
            }
            else {
                console.error('An unexpected error occurred:', error);
                return {
                    error: 'Failed to register interest. Please try again later.',
                };
            }
        }
    }
    async updateTeamMembers(startupId, teamMembers, userId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id: startupId },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        if (startup.user_id !== userId) {
            throw new common_1.UnauthorizedException('You are not authorized to update this startup');
        }
        await this.prisma.team.deleteMany({
            where: { startup_id: startupId },
        });
        const createdTeamMembers = await Promise.all(teamMembers.map((teamMember) => this.prisma.team.create({
            data: {
                startup_id: startupId,
                team_member_name: teamMember.team_member_name,
                linkedin_profile: teamMember.linkedin_profile,
                position: teamMember.position,
                bio: teamMember.bio,
            },
        })));
        return createdTeamMembers;
    }
    async updateDealDetails(startupId, dealDetails, userId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id: startupId },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        if (startup.user_id !== userId) {
            throw new common_1.UnauthorizedException('You are not authorized to update this startup');
        }
        const updatedDealDetails = await this.prisma.dealDetails.upsert({
            where: { startup_id: startupId },
            create: {
                startup_id: startupId,
                deal_type: dealDetails.deal_type,
                deal_description: dealDetails.deal_description,
            },
            update: {
                deal_type: dealDetails.deal_type,
                deal_description: dealDetails.deal_description,
            },
        });
        return updatedDealDetails;
    }
    async updatePitchDeal(startupId, pitchDeal, userId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id: startupId },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        if (startup.user_id !== userId) {
            throw new common_1.UnauthorizedException('You are not authorized to update this startup');
        }
        const updatedPitchDeal = await this.prisma.pitchDeal.upsert({
            where: { startup_id: startupId },
            create: {
                startup_id: startupId,
                short_summary: pitchDeal.short_summary,
                business_description: pitchDeal.business_description,
                market_description: pitchDeal.market_description,
                progress_proof: pitchDeal.progress_proof,
                objectives_future: pitchDeal.objectives_future,
                highlights: pitchDeal.highlights,
            },
            update: {
                short_summary: pitchDeal.short_summary,
                business_description: pitchDeal.business_description,
                market_description: pitchDeal.market_description,
                progress_proof: pitchDeal.progress_proof,
                objectives_future: pitchDeal.objectives_future,
                highlights: pitchDeal.highlights,
            },
        });
        return updatedPitchDeal;
    }
    async toggleUpvote(startupId, userId) {
        try {
            const existingUpvote = await this.prisma.upvote.findFirst({
                where: {
                    user_id: userId,
                    startup_id: startupId,
                },
            });
            if (existingUpvote) {
                await this.prisma.upvote.delete({
                    where: {
                        id: existingUpvote.id,
                    },
                });
                return { message: 'Upvote removed' };
            }
            else {
                const upvote = await this.prisma.upvote.create({
                    data: {
                        user_id: userId,
                        startup_id: startupId,
                    },
                });
                return { message: 'Upvote added' };
            }
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2003') {
                console.error('Foreign key constraint violation:', error);
                return {
                    error: 'Invalid startup ID. The specified startup does not exist.',
                };
            }
            else if (error instanceof library_1.PrismaClientValidationError &&
                error.message.includes('Expected Int, provided String')) {
                console.error('Invalid input type for startupId. Expected a number.');
                return {
                    error: 'Invalid startup ID. Please provide a valid numerical ID.',
                };
            }
            else {
                console.error('An unexpected error occurred:', error);
                return {
                    error: 'Failed to update upvote status. Please try again later.',
                };
            }
        }
    }
    async commentOnStartup(startupId, comment, userId) {
        try {
            const newComment = await this.prisma.comment.create({
                data: {
                    user_id: userId,
                    startup_id: startupId,
                    comment: comment,
                },
            });
            return newComment;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2003') {
                console.error('Foreign key constraint violation:', error);
                return {
                    error: 'Invalid startup ID. The specified startup does not exist.',
                };
            }
            else if (error instanceof library_1.PrismaClientValidationError &&
                error.message.includes('Expected Int, provided String')) {
                console.error('Invalid input type for startupId. Expected a number.');
                return {
                    error: 'Invalid startup ID. Please provide a valid numerical ID.',
                };
            }
            else {
                console.error('An unexpected error occurred:', error);
                return {
                    error: 'Failed to add comment to the startup. Please try again later.',
                };
            }
        }
    }
    async replyToComment(startupId, commentId, reply, userId) {
        try {
            const comment = await this.prisma.comment.findUnique({
                where: { id: commentId },
            });
            if (!comment) {
                throw new common_1.NotFoundException('Comment not found');
            }
            const newReply = await this.prisma.comment.create({
                data: {
                    user: { connect: { id: userId } },
                    startup: { connect: { id: startupId } },
                    comment: reply,
                    parent: { connect: { id: commentId } },
                },
                include: {
                    parent: true,
                    replies: true,
                },
            });
            return newReply;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError &&
                error.code === 'P2003') {
                console.error('Foreign key constraint violation:', error);
                return {
                    error: 'Invalid startup ID or comment ID. The specified entities do not exist.',
                };
            }
            else if (error instanceof library_1.PrismaClientValidationError &&
                error.message.includes('Expected Int, provided String')) {
                console.error('Invalid input type for startupId or commentId. Expected a number.');
                return {
                    error: 'Invalid startup ID or comment ID. Please provide valid numerical IDs.',
                };
            }
            else {
                console.error('An unexpected error occurred:', error);
                return {
                    error: 'Failed to add reply to the comment. Please try again later.',
                };
            }
        }
    }
    async getCommentReplies(commentId) {
        const comment = await this.prisma.comment.findUnique({
            where: { id: commentId },
            include: {
                replies: {
                    include: {
                        user: false,
                    },
                },
            },
        });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        return comment.replies;
    }
    async shortlistStartup(startupId, investorId) {
        const startup = await this.prisma.startup.findUnique({
            where: { id: startupId },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup not found');
        }
        const investor = await this.prisma.investor.findUnique({
            where: { id: investorId },
        });
        if (!investor) {
            throw new common_1.NotFoundException('Investor not found');
        }
        const existingShortlist = await this.prisma.shortlistedStartup.findUnique({
            where: {
                investor_id_startup_id: {
                    investor_id: investorId,
                    startup_id: startupId,
                },
            },
        });
        if (existingShortlist) {
            throw new common_1.BadRequestException('Startup already shortlisted');
        }
        const shortlist = await this.prisma.shortlistedStartup.create({
            data: {
                investor_id: investorId,
                startup_id: startupId,
            },
        });
        return { message: 'Startup shortlisted successfully', shortlist };
    }
    async getShortlistedStartups(investorId) {
        const shortlistedStartups = await this.prisma.shortlistedStartup.findMany({
            where: { investor_id: investorId },
            include: {
                startup: {
                    include: {
                        user: true,
                        industry_1: true,
                        industry_2: true,
                        stage: true,
                        ideal_investor_role: true,
                        tax_relief: true,
                    },
                },
            },
        });
        return shortlistedStartups.map((item) => item.startup);
    }
};
exports.StartupService = StartupService;
exports.StartupService = StartupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StartupService);
//# sourceMappingURL=startup.service.js.map