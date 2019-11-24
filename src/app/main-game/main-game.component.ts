import { Component, OnInit } from '@angular/core';
import { SocketIOService } from '../socket-io.service';

@Component({
  selector: 'app-main-game',
  templateUrl: './main-game.component.html',
  styleUrls: ['./main-game.component.css']
})
export class MainGameComponent implements OnInit {

  constructor(socketIOService: SocketIOService) {
  }

  ngOnInit() {

  }
}
