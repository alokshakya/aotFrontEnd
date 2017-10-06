/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemotestComputersComponent } from './demotest-computers.component';

describe('DemotestComputersComponent', () => {
    let component: DemotestComputersComponent;
    let fixture: ComponentFixture<DemotestComputersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemotestComputersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemotestComputersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
