import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email?: string;
  // just to see two way binding in action
  // constructor() {
  //   setInterval(() => {
  //     this.email += 'a';
  //   }, 1000);
  // }
  onEmailSubmit() {
    console.log('Submit', this.email);
  }
}
