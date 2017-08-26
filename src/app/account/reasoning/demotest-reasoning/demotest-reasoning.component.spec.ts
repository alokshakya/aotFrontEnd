import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestReasoningComponent } from './demotest-reasoning.component';

describe('DemotestReasoningComponent', () => {
  let component: DemotestReasoningComponent;
  let fixture: ComponentFixture<DemotestReasoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestReasoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
