import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';


  private users = signal([
    { email: 'admin@admin.com', password: '123123', name: 'Mahmoud' },
    { email: 'n@n.com', password: '123123', name: 'Mahmoud' },
  ]);

  private currentUser = signal<{ email: string; name: string; password: string } | null>(null);

  login({email, password}: {email: string; password: string}): boolean {
    const user = this.users().find(u => u.email === email && u.password === password);
    if(user) {
      this.currentUser.set(user);
      localStorage.setItem(this.tokenKey, 'fake-jwt-token');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

}
