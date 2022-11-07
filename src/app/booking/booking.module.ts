import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingRoutingModule } from './booking-routing.module';
import { CheckInComponent } from './check-in/check-in.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CheckInComponent, BookingDetailComponent],
  imports: [CommonModule, BookingRoutingModule, SharedModule, ReactiveFormsModule, MatExpansionModule, MatIconModule],
})
export class BookingModule {}
