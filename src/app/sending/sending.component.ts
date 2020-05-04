import { Component, OnInit } from '@angular/core';
import { TravelPacketService} from '../travel-packet.service';

@Component({
  selector: 'app-sending',
  templateUrl: './sending.component.html',
  styleUrls: ['./sending.component.css']
})
export class SendingComponent implements OnInit {
  // FROM
  fromName;
  fromHouseNumber;
  fromArea;
  fromStreet;
  fromPinCode;
  fromEmail;
  fromPhoneNumber;

  // TO
  toName;
  toHouseNumber;
  toArea;
  toStreet;
  toPinCode;
  toEmail;
  toPhoneNumber;

  // ITEM DESCRIPTION
  itemName;
  itemSize;
  itemShape;
  itemWeight;

  constructor(private us : TravelPacketService) { }

  ngOnInit() {
  }

  addData(){
    this.us.addData(this.fromName,this.fromHouseNumber,this.fromArea,this.fromStreet,this.fromPinCode,this.fromEmail,this.fromPhoneNumber,this.toName,this.toHouseNumber,this.toArea,this.toStreet,this.toPinCode,this.toEmail,this.toPhoneNumber,this.itemName,this.itemSize,this.itemShape,this.itemWeight);
    console.log(this.fromName)
  }

}


