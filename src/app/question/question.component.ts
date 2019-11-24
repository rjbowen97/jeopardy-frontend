import { Component, OnInit, Input } from '@angular/core';
import { SocketIOService } from '../socket-io.service';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;

  constructor() {
    
  }

  ngOnInit() {
  }

}
