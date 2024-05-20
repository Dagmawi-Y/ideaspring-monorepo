"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestorModule = void 0;
const common_1 = require("@nestjs/common");
const investor_controller_1 = require("./investor.controller");
const investor_service_1 = require("./investor.service");
let InvestorModule = class InvestorModule {
};
exports.InvestorModule = InvestorModule;
exports.InvestorModule = InvestorModule = __decorate([
    (0, common_1.Module)({
        controllers: [investor_controller_1.InvestorController],
        providers: [investor_service_1.InvestorService]
    })
], InvestorModule);
//# sourceMappingURL=investor.module.js.map