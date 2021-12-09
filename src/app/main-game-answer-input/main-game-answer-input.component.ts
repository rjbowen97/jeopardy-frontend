import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-game-answer-input',
  templateUrl: './main-game-answer-input.component.html',
  styleUrls: ['./main-game-answer-input.component.css']
})
export class MainGameAnswerInputComponent implements OnInit {


  public answerInputForm: FormGroup

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.answerInputForm = this.formBuilder.group({answer: ['', [Validators.required, Validators.minLength(3)]]})
  }

  onSubmit(formValue: any) {
    console.log(formValue);
  }

}
