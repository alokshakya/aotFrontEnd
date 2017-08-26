import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestGkComponent } from './mocktest-gk.component';

describe('MocktestGkComponent', () => {
  let component: MocktestGkComponent;
  let fixture: ComponentFixture<MocktestGkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestGkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
