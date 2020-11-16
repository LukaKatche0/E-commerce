import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(5), CustomValidationService.customEmailValidator]),
      password: new FormControl(null, Validators.required)
    });
    console.log(this.loginForm);
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.invalid) {
      alert('form invalid');
      return;
    }
  }

  getUsernameErrorMessage() {
    const usernameControl = this.loginForm.get('username');
    if (usernameControl.errors.required) {
      return 'username is required';
    } else if (usernameControl.errors.minlength) {
      return `you need to enter at least ${usernameControl.errors.minlength.requiredLength} characters`;
    } else if (usernameControl.errors.customEmailValidation) {
      return 'your email does not include @';
    }
    // switch (usernameControl) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
    // let number = 5;
    // if (number === 5) {
    //   console.log(5);
    // } else if(number === 6) {
    //   console.log(6);
    // } else {
    //   console.log('number is neither 5 or 6');
    // }

    // switch (number) {
    //   case 5:
    //     console.log('number is 5');
    //     break;
    //   case 6:
    //     console.log('number is 6');
    //     break;
    //   default:
    //     console.log('number is neither 5 or 6');
    // }
  }

}
