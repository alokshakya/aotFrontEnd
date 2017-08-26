import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterwisetestReasoningComponent } from './chapterwisetest-reasoning.component';

describe('ChapterwisetestReasoningComponent', () => {
  let component: ChapterwisetestReasoningComponent;
  let fixture: ComponentFixture<ChapterwisetestReasoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterwisetestReasoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterwisetestReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
