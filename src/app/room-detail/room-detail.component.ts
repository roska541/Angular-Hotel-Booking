import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  @Input() room;
  currentDate:any;
  day:any;
  years:any = [];
  constructor() { 
  	this.currentDate = new Date();
  	this.getCurrentDay();

  }

  ngOnInit() {
  }

 

  getCurrentDay(){
  	this.day = this.currentDate.getDay();
  }
}
