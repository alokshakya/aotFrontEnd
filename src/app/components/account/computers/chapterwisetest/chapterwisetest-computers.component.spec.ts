/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChapterwisetestComputersComponent } from './chapterwisetest-computers.component';

describe('ChapterwisetestComputersComponent', () => {
    let component: ChapterwisetestComputersComponent;
    let fixture: ComponentFixture<ChapterwisetestComputersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChapterwisetestComputersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChapterwisetestComputersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
