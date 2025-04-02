import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

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

  isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  }

  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    }
    catch (error) {
      console.error("Invalid JWT Token", error);
      return null;
    }
  }

  getUsername() {
    const token = this.getToken();
    if(token) {
      const user = this.decodeToken(token);
      console.log(user);
      return user.name;
    } else {
      return null;
    }
  }
}
