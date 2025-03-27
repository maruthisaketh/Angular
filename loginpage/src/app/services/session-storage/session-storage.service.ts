import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private userToken = 'userToken';

  constructor() { }

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
