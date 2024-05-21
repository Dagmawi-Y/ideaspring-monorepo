import { Controller, Get, Query, Param } from '@nestjs/common';
import { MatchService } from './match.service';
import {
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Match')
@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Get(':investorId')
  @ApiParam({
    name: 'investorId',
    type: 'integer',
    description: 'ID of the investor',
  })
  @ApiQuery({
    name: 'limit',
    type: 'integer',
    required: false,
    description:
      'Maximum number of recommended startups to return (default: 10)',
  })
  async getRecommendedStartups(
    @Param('investorId') investorId: string,
    @Query('limit') limit = 10,
  ) {
    const recommendedStartups = await this.matchService.getRecommendedStartups(
      parseInt(investorId),
      limit,
    );
    return recommendedStartups;
  }
}
