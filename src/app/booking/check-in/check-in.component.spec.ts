import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { Apollo } from 'apollo-angular';

import { CheckInComponent } from './check-in.component';

describe('CheckInComponent', () => {
  let component: CheckInComponent;
  let fixture: ComponentFixture<CheckInComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckInComponent],
      providers: [FormBuilder, { provide: MatDialog, useValue: {} }, { provide: Apollo, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckInComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initial state of component', () => {
    let buttonComponent: DebugElement;
    beforeEach(async () => {
      buttonComponent = debugElement.query(By.css('[data-test-id="form-submit-button"]'));
      spyOn(component, 'search');
      // buttonComponent.nativeElement.querySelector('button').click();
      fixture.detectChanges();
    });

    it('Button should be disabled by default', () => {
      expect(buttonComponent.nativeElement.isDisabled).toBeTruthy();
    });

    it('Button should not be clickable by default', () => {
      expect(component.search).not.toHaveBeenCalled();
    });
  });
  describe('Final state of component', () => {
    let buttonComponent: DebugElement;
    beforeEach(async () => {
      buttonComponent = debugElement.query(By.css('[data-test-id="form-submit-button"]'));

      component.form.patchValue({ bookingCode: '985JU', familyName: 'RUUD' });
      spyOn(component, 'search');
      buttonComponent.nativeElement.click();
      fixture.detectChanges();
    });

    it('Button should be enabled by default', () => {
      expect(buttonComponent.nativeElement.isDisabled).toBeFalsy();
    });

    it('Button should not be clickable by default', () => {
      expect(component.search).toHaveBeenCalled();
    });
  });
});
