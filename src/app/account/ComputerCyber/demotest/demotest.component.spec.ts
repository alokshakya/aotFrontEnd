/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemotestComponent } from './demotest.component';

describe('DemotestComponent', () => {
    let component: DemotestComponent;
    let fixture: ComponentFixture<DemotestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemotestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemotestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
