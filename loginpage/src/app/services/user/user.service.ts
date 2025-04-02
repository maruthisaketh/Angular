import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from '../session-storage/session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userState = new BehaviorSubject<any>(null);
  user$ = this.userState.asObservable();
  
  constructor(private session: SessionStorageService, private router: Router) {
    this.userState.next(this.getUsername() ?? null);
  }

  setUserData(userToken: string) {
    this.session.setToken(userToken);
    this.userState.next(this.session.getUsername());
  }

  getUsername(): any | null {
    const username = this.session.getUsername();
    return username ?? null;
  }

  logout(): void {
    this.session.clearToken();
    this.userState.next(null);
    this.router.navigate(['/aboutus']);
  }
}
