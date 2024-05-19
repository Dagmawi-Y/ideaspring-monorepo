import { Module } from '@nestjs/common';
import { StartupController } from './dto/startup.controller';
import { StartupService } from './startup.service';
import { InvestorService } from '../investor/investor.service';
import { NotificationGateway } from 'src/notification/notification.gateway';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [StartupController],
  providers: [StartupService, InvestorService, NotificationService],
})
export class StartupModule {}
