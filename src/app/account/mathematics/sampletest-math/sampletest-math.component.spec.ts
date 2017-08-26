import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestMathComponent } from './sampletest-math.component';

describe('SampletestMathComponent', () => {
  let component: SampletestMathComponent;
  let fixture: ComponentFixture<SampletestMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletestMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
