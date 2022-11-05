import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({
  declarations: [CheckInComponent, BookingDetailComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BookingModule {}
