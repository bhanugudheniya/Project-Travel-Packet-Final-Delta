import { Component, OnInit } from '@angular/core';
import { AdminregisterService } from '../adminregister.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {
  Name;
  Phone;
  Email;
  Password;
  ConfirmPassword;

  constructor(private admin : AdminregisterService) { }

  ngOnInit() {
  }

  adminSignUp(){
    this.admin.adminSignUp(this.Name, this.Phone, this.Email, this.Password, this.ConfirmPassword);
    console.log(this.Name)
  }

}
