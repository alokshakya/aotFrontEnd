import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMathComponent } from './result-math.component';

describe('ResultMathComponent', () => {
  let component: ResultMathComponent;
  let fixture: ComponentFixture<ResultMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
