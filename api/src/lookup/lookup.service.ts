// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { Industry, Stage, InvestorRole, TaxRelief } from '@prisma/client';

// @Injectable()
// export class LookupService {
//   constructor(private prisma: PrismaService) {}

//   // Industry

//   async createIndustry(data: {
//     industry_name: string;
//     industry_image_url?: string;
//   }): Promise<Industry> {
//     return this.prisma.industry.create({
//       data,
//     });
//   }

//   async getIndustries(): Promise<Industry[]> {
//     return this.prisma.industry.findMany();
//   }

//   // Stage

//   async createStage(data: {
//     stage_name: string;
//     stage_image_url?: string;
//   }): Promise<Stage> {
//     return this.prisma.stage.create({
//       data,
//     });
//   }

//   async getStages(): Promise<Stage[]> {
//     return this.prisma.stage.findMany();
//   }

//   // InvestorRole

//   async createInvestorRole(data: {
//     role_name: string;
//     role_image_url?: string;
//   }): Promise<InvestorRole> {
//     return this.prisma.investorRole.create({
//       data,
//     });
//   }

//   async getInvestorRoles(): Promise<InvestorRole[]> {
//     return this.prisma.investorRole.findMany();
//   }

//   // TaxRelief

//   async createTaxRelief(data: { relief_name: string }): Promise<TaxRelief> {
//     return this.prisma.taxRelief.create({
//       data,
//     });
//   }

//   async getTaxReliefs(): Promise<TaxRelief[]> {
//     return this.prisma.taxRelief.findMany();
//   }
// }
