import { FormControl } from '@angular/forms';

export function ValidNumbersValidator(control: FormControl) {
  const ALLOWED_NUMBERS_REGEXP = /1|0/;
  const value = control.value;
  if (ALLOWED_NUMBERS_REGEXP.test(value)) {
    return { invalidNumber: true };
  } else {
    return null;
  }
}
