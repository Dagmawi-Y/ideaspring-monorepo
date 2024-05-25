import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateStartupDto {
  @IsString()
  pitchTitle: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @IsOptional()
  @IsString()
  industry1?: string;

  @IsOptional()
  @IsString()
  industry2?: string;

  @IsOptional()
  @IsString()
  stage?: string;

  @IsOptional()
  @IsString()
  idealInvestorRole?: string;

  @IsOptional()
  @IsNumber()
  previousRoundAmount?: number;

  @IsOptional()
  @IsNumber()
  totalRaisingAmount?: number;

  @IsOptional()
  @IsNumber()
  raisedAmount?: number;

  @IsOptional()
  @IsNumber()
  minimumInvestment?: number;

  @IsOptional()
  @IsString()
  taxRelief?: string;
}
