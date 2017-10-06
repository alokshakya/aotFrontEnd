import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGkComponent } from './result-gk.component';

describe('ResultGkComponent', () => {
  let component: ResultGkComponent;
  let fixture: ComponentFixture<ResultGkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
