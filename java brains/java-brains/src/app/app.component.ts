import { Component } from '@angular/core';
import { User } from './hello-world/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'java-brains';
  user: User;

  constructor() {
    this.user = new User();

    (this.user.name = 'Supun'),
      (this.user.address = 'Hapugala'),
      (this.user.designation = 'Software Engineer'),
      (this.user.phone = '077942428');
  }
}
