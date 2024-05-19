import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get(':userId')
  async getNotifications(@Param('userId') userId: string) {
    return this.notificationService.getNotifications(+userId);
  }

  @Patch(':notificationId')
  async markNotificationAsRead(
    @Param('notificationId') notificationId: string,
  ) {
    return this.notificationService.markNotificationAsRead(+notificationId);
  }

  @Post('create')
  async createNotification(
    @Body('userId') userId: string,
    @Body('message') message: string,
  ) {
    return this.notificationService.createNotification(+userId, message);
  }
}
