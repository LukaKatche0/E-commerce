import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  balance: number;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isUserLoggedIn()) {
      this.balance = this.authService.getUserInfo().balance;
    }
    this.authService.shouldUpdateBalance
    .subscribe(() => {
      this.balance = this.authService.getUserInfo().balance;
    })
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  logOut() {
    this.authService.logOut();
  }

}
