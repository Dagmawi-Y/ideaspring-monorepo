"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const investor_module_1 = require("./investor/investor.module");
const notification_module_1 = require("./notification/notification.module");
const prisma_module_1 = require("./prisma/prisma.module");
const engager_module_1 = require("./engager/engager.module");
const startup_module_1 = require("./startup/startup.module");
const search_module_1 = require("./search/search.module");
const alert_module_1 = require("./alert/alert.module");
const match_module_1 = require("./match/match.module");
const chat_module_1 = require("./chat/chat.module");
const conversation_controller_1 = require("./conversation/conversation.controller");
const interaction_module_1 = require("./interaction/interaction.module");
const entrepreneur_module_1 = require("./entrepreneur/entrepreneur.module");
const upload_module_1 = require("./upload/upload.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            investor_module_1.InvestorModule,
            notification_module_1.NotificationModule,
            prisma_module_1.PrismaModule,
            engager_module_1.EngagerModule,
            startup_module_1.StartupModule,
            search_module_1.SearchModule,
            alert_module_1.AlertModule,
            match_module_1.MatchModule,
            chat_module_1.ChatModule,
            interaction_module_1.InteractionModule,
            entrepreneur_module_1.EntrepreneurModule,
            upload_module_1.UploadModule,
        ],
        controllers: [conversation_controller_1.ConversationController],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map