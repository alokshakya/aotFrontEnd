import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampletestEnglishComponent } from './sampletest-english.component';

describe('SampletestEnglishComponent', () => {
  let component: SampletestEnglishComponent;
  let fixture: ComponentFixture<SampletestEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampletestEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampletestEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
