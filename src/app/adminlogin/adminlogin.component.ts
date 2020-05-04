import { Component, OnInit } from '@angular/core';
import { AdminregisterService } from '../adminregister.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  Email;
  Password;

  constructor(private admin : AdminregisterService) { }

  ngOnInit() {
  }

  adminLogin(){
    this.admin.adminLogin(this.Email,this.Password);
  }

}
