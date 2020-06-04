import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerInfoComponent } from './answer-info.component';

describe('AnswerInfoComponent', () => {
  let component: AnswerInfoComponent;
  let fixture: ComponentFixture<AnswerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
