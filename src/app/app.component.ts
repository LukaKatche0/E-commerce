import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person = {
    name: 'dsa',
    gender: 'male'
  };
  title = 'E-commerce';
}
