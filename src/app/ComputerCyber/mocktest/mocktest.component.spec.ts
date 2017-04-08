/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MocktestComponent } from './mocktest.component';

describe('MocktestComponent', () => {
  let component: MocktestComponent;
  let fixture: ComponentFixture<MocktestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MocktestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MocktestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
