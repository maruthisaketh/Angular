import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000/get-users";

  constructor(private session: SessionStorageService) {}

  async login(email: string, password: string) {
    try {


      const response = await axios.post(this.apiUrl, { email, password });

      if (!response.data.success) {
        console.log("Login Failed:", response.data.error);
        return null;
      }

      this.session.setToken(response.data.token);
      return response.data;
    }
    catch (error) {
      throw new Error("API Call error");
    }
  }

  isAuthenticated(): boolean {
    return !!this.session.getToken();
  }

}
