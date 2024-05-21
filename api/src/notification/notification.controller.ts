import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get(':userId')
  @ApiOperation({ summary: 'Get notifications for a user' })
  @ApiParam({ name: 'userId', description: 'The ID of the user' })
  @ApiOkResponse({ description: 'List of notifications' })
  async getNotifications(@Param('userId') userId: string) {
    return this.notificationService.getNotifications(+userId);
  }

  @Patch(':notificationId')
  @ApiOperation({ summary: 'Mark a notification as read' })
  @ApiParam({
    name: 'notificationId',
    description: 'The ID of the notification to mark as read',
  })
  @ApiOkResponse({ description: 'Notification marked as read successfully' })
  async markNotificationAsRead(
    @Param('notificationId') notificationId: string,
  ) {
    return this.notificationService.markNotificationAsRead(+notificationId);
  }

  @Post('create')
  @ApiOperation({ summary: 'Create a new notification' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        userId: { type: 'number', description: 'The ID of the user' },
        message: { type: 'string', description: 'The notification message' },
      },
    },
  })
  @ApiCreatedResponse({ description: 'Notification created successfully' })
  async createNotification(
    @Body('userId') userId: string,
    @Body('message') message: string,
  ) {
    return this.notificationService.createNotification(+userId, message);
  }
}
