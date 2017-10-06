import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScienceComponent } from './result-science.component';

describe('ResultScienceComponent', () => {
  let component: ResultScienceComponent;
  let fixture: ComponentFixture<ResultScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
