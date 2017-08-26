import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterwisetestGkComponent } from './chapterwisetest-gk.component';

describe('ChapterwisetestGkComponent', () => {
  let component: ChapterwisetestGkComponent;
  let fixture: ComponentFixture<ChapterwisetestGkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterwisetestGkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterwisetestGkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
