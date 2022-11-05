import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
})
export class CheckInComponent implements OnInit {
  form: FormGroup;
  errors = {
    bookingCode: {
      required: 'Booking code is required.',
      maxlength: '6 Maximum allowed characters.',
      minlength: 'Please input a minimum of 5 characters.',
    },
    familyName: {
      required: 'Family name is required.',
      maxlength: '30 characters allowed.',
      minlength: 'Please input a minimum of 2 characters.',
    },
  };
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      bookingCode: [
        '',
        [Validators.minLength(5), Validators.maxLength(6), Validators.required],
      ],

      familyName: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.required,
        ],
      ],
    });
  }

  ngOnInit(): void {}
}
