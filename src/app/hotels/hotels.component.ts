import { Component, DoCheck } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { HttpClient } from  "@angular/common/http";


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent  {

  hotels:any;
  url:any;
  rooms:any;
  toggle:boolean = false;
  isCollapsed:boolean = false;
  display: boolean = false;
  constructor(public rest:RestServiceService, private http: HttpClient) { 
  	
  	this.url = this.rest.url;
    //this.hotels = this.rest.getHotels();
  }


  showRooms(index:any){
    if(!this.toggle){
      this.rooms =  this.hotels[index].rooms;
      this.toggle = true;
      var div = document.getElementById("toggleId_" + index);
      div.setAttribute("style", "display: block;"); 

    }
    else{
      this.rooms= null;
      this.toggle = false;
      var div = document.getElementById("toggleId_" + index);
      div.setAttribute("style", "display: none;"); 
    }
    
  }

  showDetails(index:any, j:any){
    if(!this.isCollapsed){
      this.isCollapsed = true;
      var div = document.getElementById("collapseRooms" + j);
      div.setAttribute("style", "display: block;"); 
    }else{
      this.isCollapsed = false;
      var div = document.getElementById("collapseRooms" + j);
      div.setAttribute("style", "display: none;"); 
    }
  }


  showDialog() {
      this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

}
