import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestGkComponent } from './sampletest-gk.component';

describe('SampletestGkComponent', () => {
  let component: SampletestGkComponent;
  let fixture: ComponentFixture<SampletestGkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletestGkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
