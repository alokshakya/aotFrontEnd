import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotestEnglishComponent } from './demotest-english.component';

describe('DemotestEnglishComponent', () => {
  let component: DemotestEnglishComponent;
  let fixture: ComponentFixture<DemotestEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemotestEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemotestEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
