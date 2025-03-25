import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private userEmail = '';
  private token = '';

  constructor() { }

  setEmail(email: string) {
    sessionStorage.setItem(this.userEmail, email);
  }

  getEmail(): string | null {
    return sessionStorage.getItem(this.userEmail);
  }

  clearEmail() {
    sessionStorage.removeItem(this.userEmail);
  }

  setToken(token: string) {
    sessionStorage.setItem(this.token, token);
  }

  getToken(): string | null {
    if(this.token === '') {
      return null;
    }
    return sessionStorage.getItem(this.token);
  }

  clearToken() {
    sessionStorage.removeItem(this.token);
  }
}
