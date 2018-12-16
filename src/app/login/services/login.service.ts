import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private signedIn = false;
  private username;

  constructor(private router: Router) { }

  public login(username: string, password: string): Promise<boolean> {

    console.log(`Trying to log in with ${username}/${password}`);

    return new Promise<boolean>((resolve, reject) => {

      setTimeout(() => {
        this.username = username;
        this.signedIn = true;
        resolve(true);
      }, 2000);

    });
  }

  // erase user data redirect to home
  public logout(): void {
    this.signedIn = false;
    this.username = undefined;
    this.router.navigate(['home']);
  }

  public isSignedIn(): boolean {
    return this.signedIn;
  }

  public getUsername(): string {
    return this.username;
  }
}
