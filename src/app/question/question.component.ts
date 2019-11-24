import { Component, OnInit } from '@angular/core';
import { SocketIOService } from '../socket-io.service';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private question = new Question();

  constructor(socketIOService: SocketIOService) {
    socketIOService.socket.on("newQuestionLoopTickUpdate", (data) => console.log(data));
    socketIOService.socket.on("newCurrentQuestion", (data) => this.handleNewCurrentQuestion(data));
  }

  handleNewCurrentQuestion(data) {
    this.question.deserialize(data);
  }

  ngOnInit() {
  }

}
