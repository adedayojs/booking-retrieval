import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ButtonComponent, InputComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent, HeaderComponent],
})
export class ComponentsModule {}
