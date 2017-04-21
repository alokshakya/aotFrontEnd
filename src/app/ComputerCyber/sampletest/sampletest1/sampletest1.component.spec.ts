/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sampletest1Component } from './sampletest1.component';

describe('Sampletest1Component', () => {
  let component: Sampletest1Component;
  let fixture: ComponentFixture<Sampletest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampletest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampletest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
