import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterwisetestEnglishComponent } from './chapterwisetest-english.component';

describe('ChapterwisetestEnglishComponent', () => {
  let component: ChapterwisetestEnglishComponent;
  let fixture: ComponentFixture<ChapterwisetestEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterwisetestEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterwisetestEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
