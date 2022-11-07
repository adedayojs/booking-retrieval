import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { takeWhile } from 'rxjs';

import { GET_BOOKING, GET_BOOKING_Search } from 'src/app/graphql/graphql.queries';
import { UiAlertComponent } from 'src/app/shared/components/ui-alert/ui-alert.component';
import { BookingService } from 'src/app/shared/services/booking.service';
import { ValidNumbersValidator } from 'src/app/shared/validators/numbers-validator';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit, OnDestroy {
  form: FormGroup;

  componentIsActive = true;

  errors = {
    bookingCode: {
      required: 'Booking code is required.',
      maxlength: '6 Maximum allowed characters.',
      minlength: 'Please input a minimum of 5 characters.',
      invalidNumber: 'Please the allowed numbers are 2 - 9',
    },
    familyName: {
      required: 'Family name is required.',
      maxlength: '30 characters allowed.',
      minlength: 'Please input a minimum of 2 characters.',
    },
  };
  constructor(
    private fb: FormBuilder,
    private apollo: Apollo,
    private matDialog: MatDialog,
    private bookingService: BookingService,
    private router: Router
  ) {
    this.form = fb.group({
      bookingCode: ['', [Validators.minLength(5), Validators.maxLength(6), Validators.required, ValidNumbersValidator]],

      familyName: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.componentIsActive = false;
  }

  // search1() {
  //   this.apollo
  //     .watchQuery({
  //       query: GET_BOOKING,
  //     })
  //     .valueChanges.pipe(takeWhile(() => this.componentIsActive))
  //     .subscribe((res: ApolloQueryResult<any>) => {
  //       const bookings = res.data.allBookings as Array<any>;
  //       if (bookings.length < 1) {
  //         this.matDialog.open(UiAlertComponent, {
  //           data: { title: 'Sorry We could not find this booking information' },
  //         });
  //       } else {
  //         this.bookingService.setCurrentBooking(bookings[0]);
  //         const modalRef = this.matDialog.open(UiAlertComponent, {
  //           data: { title: 'Match found', buttonConfig: { color: 'primary', textColor: 'light' } },
  //         });
  //         modalRef.afterClosed().subscribe((res) => {
  //           this.router.navigateByUrl('/bookings');
  //         });
  //       }
  //     });
  // }

  search() {
    this.apollo
      .watchQuery({
        query: GET_BOOKING,
        variables: {
          bookingFilter: {
            bookingCode: this.form.controls['bookingCode'].value,
            passengers: {
              firstName: this.form.controls['familyName'].value,
            },
          },
        },
      })
      .valueChanges.pipe(takeWhile(() => this.componentIsActive))
      .subscribe((res: ApolloQueryResult<any>) => {
        const bookings = res.data.allBookings as Array<any>;
        if (bookings.length < 1) {
          this.matDialog.open(UiAlertComponent, {
            data: {
              title: 'Sorry We could not find this booking information',
              icon: 'info',
              buttonConfig: { color: 'danger', textColor: 'light', buttonText: 'Close' },
            },
          });
        } else {
          this.bookingService.setCurrentBooking(bookings[0]); // Refactor this to take in multiple bookings later. We are only expecting a single booking associated with a booking code for now
          const modalRef = this.matDialog.open(UiAlertComponent, {
            data: {
              title: 'Match found',
              icon: 'check',
              buttonConfig: { color: 'primary', textColor: 'light', buttonText: 'Proceed To Details' },
            },
            minWidth: '400px',
          });
          modalRef
            .afterClosed()
            .pipe(takeWhile(() => this.componentIsActive))
            .subscribe((res) => {
              this.router.navigateByUrl('/bookings');
            });
        }
      });
  }
}
