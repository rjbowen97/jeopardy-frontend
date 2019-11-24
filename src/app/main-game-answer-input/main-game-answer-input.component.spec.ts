import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameAnswerInputComponent } from './main-game-answer-input.component';

describe('MainGameAnswerInputComponent', () => {
  let component: MainGameAnswerInputComponent;
  let fixture: ComponentFixture<MainGameAnswerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGameAnswerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameAnswerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
