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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorController = void 0;
const common_1 = require("@nestjs/common");
const investor_service_1 = require("./investor.service");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const decorator_1 = require("../auth/decorator");
const dto = require("./dto/index");
const swagger_1 = require("@nestjs/swagger");
let InvestorController = class InvestorController {
    constructor(investorService) {
        this.investorService = investorService;
    }
    getShortlistedInvestors(userId) {
        return this.investorService.getShortlistedInvestors(userId);
    }
    getInvestorById(id) {
        return this.investorService.getInvestorById(id);
    }
    shortlistInvestor(investorId, userId) {
        return this.investorService.shortlistInvestor(parseInt(investorId, 10), userId);
    }
    getInvestors() {
        return this.investorService.getInvestors();
    }
    updateInvestorProfile(investorId, investorProfileDto) {
        return this.investorService.updateInvestorProfile(investorId, investorProfileDto);
    }
    updateInvestorCompanyProfile(investorId, investorCompanyProfileDto) {
        return this.investorService.updateInvestorCompanyProfile(investorId, investorCompanyProfileDto);
    }
    updateInvestorInterests(investorId, investorInterestsDto) {
        return this.investorService.updateInvestorInterests(investorId, investorInterestsDto);
    }
    addInvestedLocation(investorId, investedLocationDto) {
        return this.investorService.addInvestedLocation(investorId, investedLocationDto);
    }
    addInvestedStage(investorId, investedStageDto) {
        return this.investorService.addInvestedStage(investorId, investedStageDto);
    }
    addInvestedIndustry(investorId, investedIndustryDto) {
        return this.investorService.addInvestedIndustry(investorId, investedIndustryDto);
    }
    addInvestedCountry(investorId, investedCountryDto) {
        return this.investorService.addInvestedCountry(investorId, investedCountryDto);
    }
    addLanguage(investorId, languageDto) {
        return this.investorService.addLanguage(investorId, languageDto);
    }
    addKeyword(investorId, keywordDto) {
        return this.investorService.addKeyword(investorId, keywordDto);
    }
    addInvestorCompany(investorId, investorCompanyDto) {
        return this.investorService.addInvestorCompany(investorId, investorCompanyDto);
    }
    async addInvestorType(investorId, investorTypeName) {
        return this.investorService.addInvestorType(investorId, investorTypeName);
    }
};
exports.InvestorController = InvestorController;
__decorate([
    (0, common_1.Get)('shortlisted'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Get shortlisted investors for an entrepreneur' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Shortlisted investors retrieved successfully.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an entrepreneur.',
    }),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "getShortlistedInvestors", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('entrepreneur', 'investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an investor by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Investor retrieved successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an entrepreneur or investor.',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "getInvestorById", null);
__decorate([
    (0, roles_decorator_1.Roles)('investor', 'entrepreneur'),
    (0, common_1.Post)(':id/shortlist'),
    (0, roles_decorator_1.Roles)('entrepreneur'),
    (0, swagger_1.ApiOperation)({ summary: 'Shortlist an investor for an entrepreneur' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor to shortlist' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Investor shortlisted successfully.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor or entrepreneur not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'Forbidden. User must be an entrepreneur.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "shortlistInvestor", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a list of all investors' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Investors retrieved successfully.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "getInvestors", null);
__decorate([
    (0, common_1.Put)(':id/profile'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an investor profile' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Investor profile updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestorProfileDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "updateInvestorProfile", null);
__decorate([
    (0, common_1.Put)(':id/company'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an investor company profile' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Investor company profile updated successfully.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestorCompanyProfileDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "updateInvestorCompanyProfile", null);
__decorate([
    (0, common_1.Put)(':id/interests'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an investor interests' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Investor interests updated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestorInterestsDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "updateInvestorInterests", null);
__decorate([
    (0, common_1.Post)(':id/invested-locations'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a location to an investor invested locations' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Invested location added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestedLocationDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addInvestedLocation", null);
__decorate([
    (0, common_1.Post)(':id/invested-stages'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a stage to an investor invested stages' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Invested stage added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestedStageDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addInvestedStage", null);
__decorate([
    (0, common_1.Post)(':id/invested-industries'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add an industry to an investor invested industries',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Invested industry added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestedIndustryDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addInvestedIndustry", null);
__decorate([
    (0, common_1.Post)(':id/invested-countries'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a country to an investor invested countries' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Invested country added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestedCountryDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addInvestedCountry", null);
__decorate([
    (0, common_1.Post)(':id/languages'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a language to an investor languages' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Language added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.LanguageDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addLanguage", null);
__decorate([
    (0, common_1.Post)(':id/keywords'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a keyword to an investor keywords' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Keyword added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.KeywordDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addKeyword", null);
__decorate([
    (0, common_1.Post)(':id/invested-companies'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a company to an investor invested companies' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Invested company added successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto.InvestorCompanyDto]),
    __metadata("design:returntype", void 0)
], InvestorController.prototype, "addInvestorCompany", null);
__decorate([
    (0, common_1.Post)(':id/investor-type'),
    (0, roles_decorator_1.Roles)('investor'),
    (0, swagger_1.ApiOperation)({ summary: 'Associate an investor with an investor type' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'The ID of the investor' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Investor type associated successfully.' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request. Invalid input data.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Investor or investor type not found.' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Unauthorized. User must be logged in.',
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden. User must be an investor.' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('investorTypeName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], InvestorController.prototype, "addInvestorType", null);
exports.InvestorController = InvestorController = __decorate([
    (0, swagger_1.ApiTags)('Investors'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('investors'),
    __metadata("design:paramtypes", [investor_service_1.InvestorService])
], InvestorController);
//# sourceMappingURL=investor.controller.js.map