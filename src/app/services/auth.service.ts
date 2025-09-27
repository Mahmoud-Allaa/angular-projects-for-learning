import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersDB = [
    { id: 1, username: 'Mahmoud', email: 'm@m.m', password: '123' },
  ];
  
  private currentUser = signal<{ id: number; username: string; email: string } | null>(null);
  
  isAuthenticated = computed(() => this.currentUser() !== null);

  register({username, email, password}:{username: string, email: string, password: string}): boolean {
    if (this.usersDB.find(user => user.email === email)) {
      alert('Email already exists!');
      return false; // Email already exists
    }
    const newUser = { id: Date.now(), username, email, password };
    this.usersDB.push(newUser);
    return true;
  }

  login({email, password}: {email: string, password: string}): boolean {
    const user = this.usersDB.find(user => user.email === email && user.password === password);
    if (user) {
      console.log(this.currentUser());
      this.currentUser.set({ id: user.id, username: user.username, email: user.email });
      console.log(this.currentUser());
      alert('Login successful!');
      return true;
    }
      alert('Invalid email or password!');
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
  }

  getCurrentUser() {
    return this.currentUser();
  }

}
