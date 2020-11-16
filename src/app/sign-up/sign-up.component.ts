import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });
  }

  getHobbiesControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  addHobby() {
    const formControl = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

}
