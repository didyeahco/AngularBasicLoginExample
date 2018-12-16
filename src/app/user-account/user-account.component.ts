import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  username: string;

  constructor(private loginService: LoginService) {
    this.username = loginService.getUsername();
  }

  ngOnInit() {
  }

}
