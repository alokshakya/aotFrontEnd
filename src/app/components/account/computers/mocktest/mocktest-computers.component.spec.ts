/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MocktestComputersComponent } from './mocktest-computers.component';

describe('MocktestComputersComponent', () => {
    let component: MocktestComputersComponent;
    let fixture: ComponentFixture<MocktestComputersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MocktestComputersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MocktestComputersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
