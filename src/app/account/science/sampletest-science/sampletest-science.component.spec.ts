import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestScienceComponent } from './sampletest-science.component';

describe('SampletestScienceComponent', () => {
  let component: SampletestScienceComponent;
  let fixture: ComponentFixture<SampletestScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletestScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
