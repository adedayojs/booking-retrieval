import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, UiInputComponent, UiButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiButtonComponent, UiInputComponent, HeaderComponent],
})
export class ComponentsModule {}
