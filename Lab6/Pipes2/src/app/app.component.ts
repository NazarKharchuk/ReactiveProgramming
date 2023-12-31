import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num: number = 15.45;

  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];

  phones = ["iPhone 7", "LG G 5", "Honor 9", "Idol S4", "Nexus 6P"];
  phone: Observable<string> | undefined;
  constructor() { this.showPhones(); }
  showPhones() {
    this.phone = interval(500).pipe(map((i: number) => this.phones[i]));
  }

}
