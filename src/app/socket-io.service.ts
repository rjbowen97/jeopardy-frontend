import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  private url = 'http://localhost:8080';
  public socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io(this.url);
  }

  emitEvent(eventName: string, data: Object): void {
    this.socket.emit(eventName, data);
  }
}
