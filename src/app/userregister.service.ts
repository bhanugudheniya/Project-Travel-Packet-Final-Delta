import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  url = "http://localhost:3000";
  userurl=`${this.url}/user`; //Check

  constructor(private http : HttpClient) { }

  //set web tokens

  setjwt(token){
    if (token) {
      // token
      localStorage.setItem("regis-token", token);
    } else {
      alert("No token Recieved");
    }
  }

  // get tokens

  getJwt() {
    let token = localStorage.getItem("regis-token");
    if (token) {
      let payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  // remove tokens

  removeJwt() {
    localStorage.removeItem("regis-token");
  }

    //  users detail form local storage

    getDetails() {
      let details = this.getJwt();
      return details;
    }

    /// user login

  userLogin(Email, Password) {
    let obj = { Email, Password: Password };
    this.http.post(`${this.url}/login`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
      else {
        this.setjwt(res.token);
        console.log(res);
        alert('logged in');
        window.location.href = "/sending";
      }
    })
  }
  /////////////////////////////////// user signup
  SignUp(Name, Phone, Email, Password, ConfirmPassword, Address, City, State, Zip) {
    let obj5 = {
      Name, Phone, Email, Password, ConfirmPassword, Address, City, State, Zip
    }
    console.log(obj5)
    this.http.post(`${this.url}/addUserRegistration`, obj5).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
    })
  }

}
