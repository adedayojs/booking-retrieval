import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CheckInComponent],
  imports: [CommonModule, BookingRoutingModule, SharedModule],
})
export class BookingModule {}
