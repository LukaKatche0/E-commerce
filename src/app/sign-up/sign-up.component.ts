import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      // hobbies: new FormArray([])
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
    const newUser: UserModel = {
      username: this.signUpForm.get('username').value,
      password: this.signUpForm.get('password').value,
      balance: 0
    };
    this.authService.signUp(newUser)
    .subscribe((newUserFromApi) => {
      this.authService.logIn(newUserFromApi);
      this.router.navigate(['categories']);
      localStorage.setItem('token', newUserFromApi.password);
    })
  }

}
