import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IBooking } from 'src/app/shared/model/booking.model';
import { BookingService } from 'src/app/shared/services/booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss'],
})
export class BookingDetailComponent implements OnInit {
  booking!: IBooking;
  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.bookingService.booking.subscribe((res: IBooking) => {
      this.booking = res;
      if (!res) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
