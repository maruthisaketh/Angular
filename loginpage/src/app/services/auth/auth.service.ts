import { Injectable } from '@angular/core';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { Router } from '@angular/router';
import axios from "axios";

import { UserService } from '../user/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000/get-users";
  

  constructor(private session: SessionStorageService, private userService: UserService) {}

  async login(email: string, password: string) {
    
    try {

      const response = await axios.post(this.apiUrl, { email, password });

      if (!response.data.success) {
        return {success: response.data.success, error: response.data.error};
      }
      
      this.userService.setUserData(response.data.token);
      
      return {success: response.data.success};
    }
    catch (error) {
      throw new Error("API Call error");
    }
  }

}
