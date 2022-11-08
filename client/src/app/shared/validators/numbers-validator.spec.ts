import { FormControl } from '@angular/forms';
import { ValidNumbersValidator } from './numbers-validator';

describe('Number Validation', () => {
  it('should be a valid number', () => {
    expect(ValidNumbersValidator(new FormControl('234987'))).toBeNull();
    expect(ValidNumbersValidator(new FormControl('As76Sd'))).toBeNull();
    expect(ValidNumbersValidator(new FormControl(23456))).toBeNull();
  });

  it('should be an invalid number', () => {
    const errorMessage = { invalidNumber: true };
    expect(ValidNumbersValidator(new FormControl(1))).toEqual(errorMessage);
    expect(ValidNumbersValidator(new FormControl(0))).toEqual(errorMessage);
    expect(ValidNumbersValidator(new FormControl(45890))).toEqual(errorMessage);
    expect(ValidNumbersValidator(new FormControl(45890461))).toEqual(errorMessage);
    expect(ValidNumbersValidator(new FormControl('djj71'))).toEqual(errorMessage);
  });
});
