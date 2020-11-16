import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

  static customEmailValidator(control: FormControl) {
    const value: string = control.value;
    if (!value || !value.includes('@')) {
      return {
        customEmailValidation: true
      };
    }
    return null;
  }
}
