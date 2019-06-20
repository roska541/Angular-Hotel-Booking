import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { HttpClient } from  "@angular/common/http";
import { HotelsComponent } from '../hotels/hotels.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  options:any
  search:any;
  constructor(public rest:RestServiceService) { }

  ngOnInit() {
  }

  onSearchChange(searchValue : string){
    this.rest.searchHotel(searchValue);
    
  }

  sortNameUp(){
  	this.rest.sortUp();
  }

  sortNameDown(){
  	this.rest.sortDown();
  }

  sortPriceLow(){
  	this.rest.sortPriceLow()
  }

  sortPriceHigh(){
  	this.rest.sortPriceHigh();
  }
}
