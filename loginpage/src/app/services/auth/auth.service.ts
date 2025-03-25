import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';
import axios from "axios";
import { Router } from '@angular/router';

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
        console.log("Login Failed:", response.data.error);
        return null;
      }

      this.session.setToken(response.data.token);
      this.session.setUsername(response.data.username);
      return response.data;
    }
    catch (error) {
      throw new Error("API Call error");
    }
  }

  isAuthenticated(): boolean {
    const token = this.session.getToken();
    return !!token;
  }

  logout() {
    this.session.clearUsername();
    this.session.clearToken();
    this.router.navigate(['/login']);
  }

}
