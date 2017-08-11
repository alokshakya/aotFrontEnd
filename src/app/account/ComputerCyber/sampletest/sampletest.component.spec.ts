/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SampletestComponent } from './sampletest.component';

describe('SampletestComponent', () => {
    let component: SampletestComponent;
    let fixture: ComponentFixture<SampletestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SampletestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SampletestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
