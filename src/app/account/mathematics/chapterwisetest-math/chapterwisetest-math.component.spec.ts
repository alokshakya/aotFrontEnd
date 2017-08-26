import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterwisetestMathComponent } from './chapterwisetest-math.component';

describe('ChapterwisetestMathComponent', () => {
  let component: ChapterwisetestMathComponent;
  let fixture: ComponentFixture<ChapterwisetestMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterwisetestMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterwisetestMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
