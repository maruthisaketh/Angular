import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import axios from "axios";
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000/get-users";

  constructor(private session: SessionStorageService, private router: Router) {}

  async login(email: string, password: string) {
    try {

      const response = await axios.post(this.apiUrl, { email, password });

      if (!response.data.success) {
        return {success: response.data.success, error: response.data.error};
      }

      this.session.setToken(response.data.token);
      console.log(response.data.token);
      
      return {success: response.data.success};
    }
    catch (error) {
      throw new Error("API Call error");
    }
  }

  isAuthenticated(): boolean {
    const token = this.session.getToken();
    console.log(!!token);
    return !!token;
  }

  logout() {
    this.session.clearToken();
    this.router.navigate(['/aboutus']);
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

  isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  }

  getUsername() {
    const token = this.session.getToken();
    if(token) {
      const user = this.decodeToken(token);
      console.log(user);
      return user.name;
    } else {
      return null;
    }
  }
  

}
