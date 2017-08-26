import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestMathComponent } from './mocktest-math.component';

describe('MocktestMathComponent', () => {
  let component: MocktestMathComponent;
  let fixture: ComponentFixture<MocktestMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
