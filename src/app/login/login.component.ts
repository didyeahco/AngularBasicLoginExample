import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues: any): void {
    this.loginService.login(formValues.username, formValues.password)
    .then(isSignedIn => {
      if (isSignedIn) {
        console.log('yeah! redirect to home');
        this.router.navigate(['home']);
      } else {
        console.log(':(');
      }
    }).catch(error => {
      console.warn('Error while signing in', error);
    });
  }
}
