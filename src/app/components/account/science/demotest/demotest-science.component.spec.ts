import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestScienceComponent } from './demotest-science.component';

describe('DemotestScienceComponent', () => {
  let component: DemotestScienceComponent;
  let fixture: ComponentFixture<DemotestScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
