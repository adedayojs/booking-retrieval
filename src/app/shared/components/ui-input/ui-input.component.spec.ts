import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlContainer, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UiInputComponent } from './ui-input.component';

describe('UiInputComponent', () => {
  let component: UiInputComponent;
  let fixture: ComponentFixture<UiInputComponent>;
  let debugElement: DebugElement;
  let form = new FormGroup({
    firstControl: new FormControl('', Validators.required),
  });
  const controlContainerMock = { control: form };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInputComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: ControlContainer, useValue: controlContainerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.controlName = 'firstControl';
    component.type = 'text';

    fixture.detectChanges();
  });

  describe('It Should Create', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Should have a container', () => {
      const container = debugElement.query(By.css('[data-test-id="input-container"]'));

      expect(container).toBeTruthy();
    });

    it('Should have an input element', () => {
      const container = debugElement.query(By.css('[data-test-id="input"]'));

      expect(container).toBeTruthy();
    });

    it('Should have a label present', () => {
      const container = debugElement.query(By.css('[data-test-id="label"]'));

      expect(container).toBeTruthy();
    });
  });

  it('Should have matching form group', () => {
    expect(component.parentForm).toBe(form);
  });

  it('Should have a input type of text present', () => {
    const container = debugElement.query(By.css('[data-test-id="input"]'));

    expect(container.attributes['type']).toBe('text');
  });

  describe('Test final value when input is valid', () => {
    const testValue = 'ade';

    beforeEach(async () => {
      const nativeElement = debugElement.query(By.css('[data-test-id="input"]')).nativeElement;
      nativeElement.value = testValue;

      nativeElement.dispatchEvent(new Event('focus'));
      nativeElement.dispatchEvent(new Event('input'));
      nativeElement.dispatchEvent(new Event('blur'));
      fixture.detectChanges();
    });

    it('control should be valid', () => {
      expect(component.formControl.valid).toBe(true);
    });

    it('control should have been touched', () => {
      expect(component.formControl.touched).toBe(true);
    });
    it('control should be ade', () => {
      expect(component.formControl.value).toBe(testValue);
    });
  });

  describe('Test final value when input is not valid', () => {
    const testValue = '';

    beforeEach(async () => {
      const nativeElement = debugElement.query(By.css('[data-test-id="input"]')).nativeElement;
      nativeElement.value = testValue;

      nativeElement.dispatchEvent(new Event('focus'));
      nativeElement.dispatchEvent(new Event('input'));
      nativeElement.dispatchEvent(new Event('blur'));
      fixture.detectChanges();
    });

    it('control should be invalid', () => {
      expect(component.formControl.invalid).toBe(true);
    });

    it('control should have been touched', () => {
      expect(component.formControl.touched).toBe(true);
    });

    it('control should be empty', () => {
      expect(component.formControl.value).toBe(testValue);
    });

    it('container div should have has-error class', () => {
      const { nativeElement } = debugElement.query(By.css('[data-test-id="input-container"]'));

      expect(nativeElement.getAttribute('class')).toContain('has-error');
    });
  });
});

describe('Test Initial value', () => {
  let component: UiInputComponent;
  let fixture: ComponentFixture<UiInputComponent>;
  let debugElement: DebugElement;
  let form = new FormGroup({
    firstControl: new FormControl('', Validators.required),
  });
  const controlContainerMock = { control: form };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInputComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: ControlContainer, useValue: controlContainerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UiInputComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    component.controlName = 'firstControl';
    component.type = 'text';

    fixture.detectChanges();
  });
  
  it('input container should have form-group class', () => {
    const container = debugElement.query(By.css('[data-test-id="input-container"]'));
    expect(container.classes['form-group']).toBeTruthy();
  });

  it('input container should not have error class', () => {
    const container = debugElement.query(By.css('[data-test-id="input-container"]'));

    expect(container.nativeElement.getAttribute('class')).not.toContain('has-error');
  });
});
