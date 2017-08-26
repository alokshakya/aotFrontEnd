import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterwisetestScienceComponent } from './chapterwisetest-science.component';

describe('ChapterwisetestScienceComponent', () => {
  let component: ChapterwisetestScienceComponent;
  let fixture: ComponentFixture<ChapterwisetestScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterwisetestScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterwisetestScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
