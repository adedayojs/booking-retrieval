import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiAlertComponent } from './ui-alert/ui-alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UiInputComponent,
    UiButtonComponent,
    UiAlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatIconModule],
  exports: [UiButtonComponent, UiInputComponent, HeaderComponent],
})
export class ComponentsModule {}
