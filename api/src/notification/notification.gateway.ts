import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinNotifications')
  async joinNotifications(
    @ConnectedSocket() client: Socket,
    @MessageBody() userId: string,
  ) {
    console.log('Client joined notification room:', userId);
    client.join(userId);
  }

  sendNotification(userId: string, notification: any) {
    console.log('Sending notification to userId:', userId);
    const payload = {
      source: notification.source,
      message: notification.message,
      timestamp: notification.timestamp,
    };

    this.server.to(userId).emit('notification', payload);
  }
}