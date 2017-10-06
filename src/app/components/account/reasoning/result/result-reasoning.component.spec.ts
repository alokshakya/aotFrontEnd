import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultReasoningComponent } from './result-reasoning.component';

describe('ResultReasoningComponent', () => {
  let component: ResultReasoningComponent;
  let fixture: ComponentFixture<ResultReasoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultReasoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
