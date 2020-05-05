import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  getLogin(data) {
    return this.http.get('http://localhost:8080/login', data);
  }

  getRegister(e) {
    this.http.post('http://localhost:8080/register', e);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
