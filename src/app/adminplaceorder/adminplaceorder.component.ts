import { Component, OnInit } from '@angular/core';
import { TravelPacketService } from '../travel-packet.service';

@Component({
  selector: 'app-adminplaceorder',
  templateUrl: './adminplaceorder.component.html',
  styleUrls: ['./adminplaceorder.component.css']
})
export class AdminplaceorderComponent implements OnInit {
  arr;

  constructor(private us : TravelPacketService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.us.getData().subscribe(data => { this.arr = data; },
      (err) => {
        console.log(err);
      });
  }

}
