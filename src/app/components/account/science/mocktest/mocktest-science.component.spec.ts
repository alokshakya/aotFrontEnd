import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestScienceComponent } from './mocktest-science.component';

describe('MocktestScienceComponent', () => {
  let component: MocktestScienceComponent;
  let fixture: ComponentFixture<MocktestScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
