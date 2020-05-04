import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TravelPacketService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  addData(fromName, fromHouseNumber, fromArea, fromStreet, fromPinCode, fromEmail, fromPhoneNumber, toName, toHouseNumber, toArea, toStreet, toPinCode, toEmail, toPhoneNumber, itemName, itemSize, itemShape, itemWeight){
    const obj = {fromName, fromHouseNumber, fromArea, fromStreet, fromPinCode, fromEmail, fromPhoneNumber, toName, toHouseNumber, toArea, toStreet, toPinCode, toEmail, toPhoneNumber, itemName, itemSize, itemShape, itemWeight};
    this
        .http
        .post(`${this.url}/addData`, obj)
        .subscribe(res => console.log(res));
        console.log("Working")
  }

  getData(){
    return(
      this
          .http
          .get(`${this.url}/getData`)
    );
  }
    
}
