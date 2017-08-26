import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultEnglishComponent } from './result-english.component';

describe('ResultEnglishComponent', () => {
  let component: ResultEnglishComponent;
  let fixture: ComponentFixture<ResultEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
