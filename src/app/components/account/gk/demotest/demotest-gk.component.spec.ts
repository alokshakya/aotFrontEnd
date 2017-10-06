import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestGkComponent } from './demotest-gk.component';

describe('DemotestGkComponent', () => {
  let component: DemotestGkComponent;
  let fixture: ComponentFixture<DemotestGkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestGkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
