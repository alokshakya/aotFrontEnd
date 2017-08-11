/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChapterwisetestComponent } from './chapterwisetest.component';

describe('ChapterwisetestComponent', () => {
    let component: ChapterwisetestComponent;
    let fixture: ComponentFixture<ChapterwisetestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChapterwisetestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
