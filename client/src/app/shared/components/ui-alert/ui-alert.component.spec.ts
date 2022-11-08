import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { UiAlertComponent } from './ui-alert.component';

describe('UiAlertComponent', () => {
  let component: UiAlertComponent;
  let fixture: ComponentFixture<UiAlertComponent>;
  let debugElement: DebugElement;
  let mockMatDialogRef = {
    close: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiAlertComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockMatDialogRef,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            title: 'Sample',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAlertComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('It Should Create', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('Should have a container', () => {
      const container = debugElement.query(
        By.css('[data-test-id="alert-container"]')
      );
      expect(container).toBeTruthy();
    });

    it('Should have an icon present', () => {
      const container = debugElement.query(
        By.css('[data-test-id="alert-icon"]')
      );
      expect(container).toBeTruthy();
    });

    it('Should have a title element', () => {
      const container = debugElement.query(
        By.css('[data-test-id="alert-title"]')
      );
      expect(container).toBeTruthy();
    });

    it('Should have a button present', () => {
      const container = debugElement.query(
        By.css('[data-test-id="alert-button"]')
      );
      expect(container).toBeTruthy();
    });
  });

  xit('should call close method when button is clicked', () => {
    spyOn(mockMatDialogRef, 'close');
    const container = debugElement.query(
      By.css('[data-test-id="alert-button"]')
    );
    container.nativeElement.click();
    fixture.detectChanges();
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });
});
