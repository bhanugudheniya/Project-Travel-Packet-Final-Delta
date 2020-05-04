import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {
  url = "http://localhost:3000";
  adminurl=`${this.url}/admin`; //Check

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

        /// admin login

  adminLogin(Email, Password) {
    let obj = { Email, Password: Password };
    this.http.post(`${this.url}/adminlogin`, obj).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
      else {
        this.setjwt(res.token);
        console.log(res);
        alert('logged in');
        window.location.href = "/admindashboard";
      }
    })
  }
  /////////////////////////////////// admin signup
  adminSignUp(Name, Phone, Email, Password, ConfirmPassword) {
    let obj5 = {
      Name, Phone, Email, Password, ConfirmPassword
    }
    console.log(obj5)
    this.http.post(`${this.url}/addAdminRegistration`, obj5).subscribe((res: any) => {
      if (res.message) {
        alert(res.message);
      }
    })
  }



}
