import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private username = 'username';
  private userToken = 'userToken';

  constructor() { }

  setUsername(email: string) {
    sessionStorage.setItem(this.username, email);
  }

  getUsername(): string | null {
    return sessionStorage.getItem(this.username);
  }

  clearUsername() {
    sessionStorage.removeItem(this.username);
  }

  setToken(token: string) {
    sessionStorage.setItem(this.userToken, token);
  }

  getToken(): string | null {
    if(this.userToken === '') {
      return null;
    }
    
    return sessionStorage.getItem(this.userToken);
  }

  clearToken() {
    sessionStorage.removeItem(this.userToken);
  }
}
