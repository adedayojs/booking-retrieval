import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { CheckInComponent } from './check-in/check-in.component';

const routes: Routes = [
  { path: '', component: CheckInComponent },
  { path: 'bookings', component: BookingDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
