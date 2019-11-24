import { Component, OnInit } from '@angular/core';
import { SocketIOService } from '../socket-io.service';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-main-game-question',
  templateUrl: './main-game-question.component.html',
  styleUrls: ['./main-game-question.component.css']
})
export class MainGameQuestionComponent implements OnInit {
  
  private currentQuestion = new Question();

  constructor(private socketIOService: SocketIOService) {
    this.socketIOService.socket.on("newCurrentQuestion", (data) => this.handleNewCurrentQuestion(data));
  }

  handleNewCurrentQuestion(data) {
    this.currentQuestion.fromSerializedData(data);
  }

  onBuzzInButtonClick() {
    this.socketIOService.emitEvent("playerBuzzedIn", null);
    console.log("Hey man!");
  }

  ngOnInit() {
  }

}
