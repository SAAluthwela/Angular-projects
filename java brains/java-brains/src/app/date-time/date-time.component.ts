import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  dateMessage: string = '';

  constructor() {
    setInterval(() => {
      let date = new Date();

      this.dateMessage = date.toDateString() + ' ' + date.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit(): void {}
}
