import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MocktestEnglishComponent } from './mocktest-english.component';

describe('MocktestEnglishComponent', () => {
  let component: MocktestEnglishComponent;
  let fixture: ComponentFixture<MocktestEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
