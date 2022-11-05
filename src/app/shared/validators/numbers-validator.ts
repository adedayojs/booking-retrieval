import { AbstractControl, FormControl } from '@angular/forms';

/**
 * This EmailValidator class uses Regex introduced by
 * https://github.com/manishsaraan/email-validator/blob/master/index.js
 * You are welcome to propose any stornger regex. Make sure it will pass all the unit tests
 */
export function ValidNumbersValidator(control: FormControl) {
  const ALLOWED_NUMBERS_REGEXP = /1|0/;
  const value = control.value;
  if (ALLOWED_NUMBERS_REGEXP.test(value)) {
    return { invalidNumber: true };
  } else {
    return null;
  }
}
