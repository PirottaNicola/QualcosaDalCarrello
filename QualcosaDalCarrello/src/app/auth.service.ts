import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    const isAuthenticated = false;
    console.log('isAuthenticated: ' + isAuthenticated);

    return isAuthenticated;
  }
}
