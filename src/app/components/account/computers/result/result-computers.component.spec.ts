/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ResultComputersComponent } from './result-computers.component';

describe('ResultComputersComponent', () => {
    let component: ResultComputersComponent;
    let fixture: ComponentFixture<ResultComputersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultComputersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComputersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
