/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampletestComputersComponent } from './sampletest-computers.component';

describe('SampletestComputersComponent', () => {
    let component: SampletestComputersComponent;
    let fixture: ComponentFixture<SampletestComputersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SampletestComputersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SampletestComputersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
