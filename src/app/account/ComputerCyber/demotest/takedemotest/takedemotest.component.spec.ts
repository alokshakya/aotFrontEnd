/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TakedemotestComponent } from './takedemotest.component';

describe('TakedemotestComponent', () => {
  let component: TakedemotestComponent;
  let fixture: ComponentFixture<TakedemotestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakedemotestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakedemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
