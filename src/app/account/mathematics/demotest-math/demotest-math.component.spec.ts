import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestMathComponent } from './demotest-math.component';

describe('DemotestMathComponent', () => {
  let component: DemotestMathComponent;
  let fixture: ComponentFixture<DemotestMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
