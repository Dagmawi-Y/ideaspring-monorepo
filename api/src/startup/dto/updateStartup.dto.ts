import { IsOptional, IsString, IsNumber, IsUrl } from 'class-validator';

export class UpdateStartupDto {
  @IsOptional()
  @IsString()
  pitchTitle?: string;

  @IsOptional()
  @IsUrl()
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
