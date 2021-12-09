import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainGameComponent } from './main-game/main-game.component';
import { QuestionComponent } from './question/question.component';
import { MainGameAnswerInputComponent } from './main-game-answer-input/main-game-answer-input.component';

import { MainGameQuestionComponent } from './main-game-question/main-game-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent,
    QuestionComponent,
    MainGameQuestionComponent,
    MainGameAnswerInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
