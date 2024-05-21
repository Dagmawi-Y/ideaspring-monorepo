import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationGateway } from './notification.gateway';

@Injectable()
export class NotificationService {
  constructor(
    private prisma: PrismaService,
    private notificationGateway: NotificationGateway,
  ) {}

  async getNotifications(userId: number) {
    const notifications = await this.prisma.alert.findMany({
      where: {
        user_id: userId,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });

    return notifications;
  }

  async markNotificationAsRead(notificationId: number) {
    const updatedNotification = await this.prisma.alert.update({
      where: {
        id: notificationId,
      },
      data: {
        read: true,
      },
    });

    return updatedNotification;
  }

  async createNotification(userId: number, message: string) {
    const notification = await this.prisma.alert.create({
      data: {
        user_id: userId,
        source: 'startup',
        message,
        timestamp: new Date(),
      },
    });

    this.notificationGateway.sendNotification(userId.toString(), notification);

    return notification;
  }
}
