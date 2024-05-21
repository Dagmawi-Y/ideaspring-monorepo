import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InvestorModule } from './investor/investor.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';
import { EngagerModule } from './engager/engager.module';
import { StartupModule } from './startup/startup.module';
import { SearchModule } from './search/search.module';
import { MatchModule } from './match/match.module';
import { ChatModule } from './chat/chat.module';
import { ConversationController } from './conversation/conversation.controller';
import { InteractionModule } from './interaction/interaction.module';
import { EntrepreneurModule } from './entrepreneur/entrepreneur.module';
import { UploadModule } from './upload/upload.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule.register({
      baseURL: 'http://localhost:3333', // Your backend URL
      withCredentials: true, // Include credentials (cookies) in requests
    }),
    AuthModule,
    UserModule,
    InvestorModule,
    NotificationModule,
    PrismaModule,
    EngagerModule,
    StartupModule,
    SearchModule,
    MatchModule,
    ChatModule,
    InteractionModule,
    EntrepreneurModule,
    UploadModule,
  ],
  controllers: [ConversationController],
  providers: [],
})
export class AppModule {}
