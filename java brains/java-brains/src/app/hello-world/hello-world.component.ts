import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  user: any;

  @Input('user') userObj: User;
  isCollapsed: boolean = true;

  constructor() {}

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.user = {
      name: this.userObj.name,
      designation: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone,
    };
  }
}
