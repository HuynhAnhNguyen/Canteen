import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client;

  constructor(private authService:AuthService) {
    this.stompClient = new Client({
      brokerURL:environment.backendApiUrl+ '/ws?token='+this.authService.getToken(), 
    //   connectHeaders: {
    //     Authorization: `${this.authService.getToken()}` // Gửi JWT trong header (dự phòng)
    // },
      debug: (msg: string) => console.log(msg), // Debug log
      reconnectDelay: 5000, // Tự động kết nối lại sau 5s nếu mất kết nối
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000
    });

    this.stompClient.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/user/queue/notifications', message => {
        console.log('📩 Thông báo cá nhân:', message.body);
      });
      this.stompClient.subscribe('/topic/public', message => {
        console.log('📩 Thông báo chung:', message.body);
      });
    };

    this.stompClient.onDisconnect = () => {
      console.log('Disconnected!');
    };
  }

  // Kết nối WebSocket
  connect() {
    this.stompClient.activate(); // Thay vì connect()
  }

  // Ngắt kết nối
  disconnect() {
    this.stompClient.deactivate();
  }

  // Gửi tin nhắn qua WebSocket
  sendMessage(destination: string, body: any) {
    if (this.stompClient.connected) {
      this.stompClient.publish({ destination, body: JSON.stringify(body) });
    }
  }
}
