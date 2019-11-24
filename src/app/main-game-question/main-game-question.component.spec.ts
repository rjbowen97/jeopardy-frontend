import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameQuestionComponent } from './main-game-question.component';

describe('MainGameQuestionComponent', () => {
  let component: MainGameQuestionComponent;
  let fixture: ComponentFixture<MainGameQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainGameQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGameQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
