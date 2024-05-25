// import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
// import { LookupService } from './lookup.service';
// import { Industry, Stage, InvestorRole, TaxRelief } from '@prisma/client';
// import { JwtGuard } from 'src/auth/guard';
// import {
//   ApiTags,
//   ApiBearerAuth,
//   ApiBody,
//   ApiCreatedResponse,
//   ApiOkResponse,
// } from '@nestjs/swagger';

// // @UseGuards(JwtGuard)
// @ApiBearerAuth()
// @ApiTags('Lookups')
// @Controller('lookups')
// export class LookupController {
//   constructor(private lookupService: LookupService) {}

//   // Industry
//   @Post('industry')
//   @ApiBody({
//     schema: {
//       properties: {
//         industry_name: { type: 'string' },
//         industry_image_url: { type: 'string', nullable: true },
//       },
//     },
//   })
//   @ApiCreatedResponse({ description: 'Create new industry' })
//   async createIndustry(
//     @Body() data: { industry_name: string; industry_image_url?: string },
//   ): Promise<Industry> {
//     return this.lookupService.createIndustry(data);
//   }

//   @Get('industries')
//   @ApiOkResponse({ description: 'Get all industries' })
//   async getIndustries(): Promise<Industry[]> {
//     return this.lookupService.getIndustries();
//   }

//   // Stage
//   @Post('stage')
//   @ApiBody({
//     schema: {
//       properties: {
//         stage_name: { type: 'string' },
//         stage_image_url: { type: 'string', nullable: true },
//       },
//     },
//   })
//   @ApiCreatedResponse({ description: 'Create new stage' })
//   async createStage(
//     @Body() data: { stage_name: string; stage_image_url?: string },
//   ): Promise<Stage> {
//     return this.lookupService.createStage(data);
//   }

//   @Get('stages')
//   @ApiOkResponse({ description: 'Get all stages' })
//   async getStages(): Promise<Stage[]> {
//     return this.lookupService.getStages();
//   }

//   // InvestorRole
//   @Post('investor-role')
//   @ApiBody({
//     schema: {
//       properties: {
//         role_name: { type: 'string' },
//         role_image_url: { type: 'string', nullable: true },
//       },
//     },
//   })
//   @ApiCreatedResponse({ description: 'Create new investor role' })
//   async createInvestorRole(
//     @Body() data: { role_name: string; role_image_url?: string },
//   ): Promise<InvestorRole> {
//     return this.lookupService.createInvestorRole(data);
//   }

//   @Get('investor-roles')
//   @ApiOkResponse({ description: 'Get all investor roles' })
//   async getInvestorRoles(): Promise<InvestorRole[]> {
//     return this.lookupService.getInvestorRoles();
//   }

//   // TaxRelief
//   @Post('tax-relief')
//   @ApiBody({
//     schema: {
//       properties: {
//         relief_name: { type: 'string' },
//       },
//     },
//   })
//   @ApiCreatedResponse({ description: 'Create new tax relief' })
//   async createTaxRelief(
//     @Body() data: { relief_name: string },
//   ): Promise<TaxRelief> {
//     return this.lookupService.createTaxRelief(data);
//   }

//   @Get('tax-reliefs')
//   @ApiOkResponse({ description: 'Get all tax reliefs' })
//   async getTaxReliefs(): Promise<TaxRelief[]> {
//     return this.lookupService.getTaxReliefs();
//   }
// }
