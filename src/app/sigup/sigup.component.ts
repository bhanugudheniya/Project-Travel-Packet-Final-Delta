import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {
  Name;
  Phone;
  Email;
  Password;
  ConfirmPassword
  Address;
  City;
  State;
  Zip;
  constructor(private us : UserregisterService) { }

  ngOnInit() {
  }
  SignUp(){
    this.us.SignUp(this.Name,this.Phone,this.Email,this.Password,this.ConfirmPassword,this.Address,this.City,this.State,this.Zip);
    console.log(this.Name)
  }
}
