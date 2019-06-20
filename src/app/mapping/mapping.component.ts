import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service';
import { HttpClient } from  "@angular/common/http";
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';


@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  url:any;
  map:any;
  options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 6,
		center: latLng(26.427300, -82.099800)
	};

  secondLayer: any = [];
  hotels:any;
  constructor(public rest:RestServiceService, private http: HttpClient) { 
  	this.url = this.rest.url;

  	this.getLocations();
  }

  ngOnInit() {

  }

  getLocations(){
  	
  	for(var i =0; i < this.rest.hotels.length; i++){
      //Leaflet Angular ngx does not allow Message or Name or Titles
  		var temp = marker([ this.rest.hotels[i].geo_location[0].lat,
                          this.rest.hotels[i].geo_location[0].lon
                          ]);
  		this.secondLayer.push(temp);
  	}
    
  	
  }


}
