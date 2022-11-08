import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UiButtonComponent } from './ui-button.component';

describe('UiButtonComponent', () => {
  let component: UiButtonComponent;
  let fixture: ComponentFixture<UiButtonComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiButtonComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('It Should Create', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Should have a container', () => {
      const container = debugElement.query(By.css('[data-test-id="button"]'));
      expect(container).toBeTruthy();
    });

    it('Should have an icon present', () => {
      const container = debugElement.query(
        By.css('[data-test-id="button-text"]')
      );
      expect(container).toBeTruthy();
    });
  });
});
