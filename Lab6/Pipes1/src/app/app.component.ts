import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myDate = new Date(1961, 3, 12);

  welcome: string = "Hello World!";
  persentage: number = 0.14;

  myNewDate = Date.now();

  pi: number = 3.1415;

  money: number = 23.45;

  message = "Hello World!";

  x: number = 15.45;

  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];

  numberBeforeRoot1: number = 9;
  numberBeforeRoot2: number = 256;
}
