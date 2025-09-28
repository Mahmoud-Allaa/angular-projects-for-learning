import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = signal([
    { email: 'm@m.com', password: '123123', name: 'Mahmoud' },
    { email: 'n@n.com', password: '123123', name: 'Mahmoud' },
  ]);

  private currentUser = signal<{ email: string; name: string; password: string } | null>(null);

  login({email, password}: {email: string; password: string}): boolean {
    const user = this.users().find(u => u.email === email && u.password === password);
    if(user) {
      this.currentUser.set(user);
      return true;
    }
    return false;
  }
}
