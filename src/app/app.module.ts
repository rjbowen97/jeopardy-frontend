import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainGameComponent } from './main-game/main-game.component';
import { QuestionComponent } from './question/question.component';
import { QuestionDisplayComponent } from './question-display/question-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent,
    QuestionComponent,
    QuestionDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
