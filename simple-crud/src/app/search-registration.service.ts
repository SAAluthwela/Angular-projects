import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class SearchRegistrationService {
  constructor(private http: HttpClient) {}

  public saveUser(user: User) {
    return this.http.post('http://localhost:9090/register', user, {
      responseType: 'text' as 'json',
    });
  }
}
