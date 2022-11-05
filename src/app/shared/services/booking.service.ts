import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { IBooking } from '../model/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  booking: any = new BehaviorSubject('');

  constructor() {}

  setCurrentBooking(booking: IBooking) {
    this.booking.next(booking);
  }
}
