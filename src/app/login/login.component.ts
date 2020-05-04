import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email;
  Password;

  constructor(private user : UserregisterService) { }

  ngOnInit() {
  }

  userLogin(){
    this.user.userLogin(this.Email,this.Password);
  }

}
