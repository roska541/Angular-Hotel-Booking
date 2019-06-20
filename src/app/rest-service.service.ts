import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  "@angular/common/http";
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class RestServiceService {

  url:any;
  hotels:any;
  data:any;

  constructor(private http: HttpClient) { 

  	this.url = "http://127.0.0.1:8000";
  	
  }

  getHotels(){
  	return this.hotels;
  }

  load() {
  		var link = this.url + '/hotels';
    	return new Promise((resolve, reject) => {
            this.http
                .get(link)
                .subscribe(response => {
                	console.log(response);
                    this.hotels = response;
                    resolve(true);
            })
    	})
  }

  sortUp(){
  	this.hotels.sort(function(a, b){
	    if(a.name < b.name) { return -1; }
	    if(a.name > b.name) { return 1; }
	    return 0;
	})
  }

  sortDown(){
  	console.log('sortDown')
  	this.hotels.sort(function(a, b){
	    if(b.name < a.name) { return -1; }
	    if(b.name > a.name) { return 1; }
	    return 0;
	})
  }

  sortPriceLow(){
  	this.hotels.sort(function(a, b){
	    if(a.rooms[0].price < b.rooms[0].price) { return -1; }
	    if(a.rooms[0].price > b.rooms[0].price) { return 1; }
	    return 0;
	})
  }

  sortPriceHigh(){
  	this.hotels.sort(function(a, b){
	    if(a.rooms[0].price > b.rooms[0].price) { return -1; }
	    if(a.rooms[0].price < b.rooms[0].price) { return 1; }
	    return 0;
	})
  }

  makeBook(form:any){

    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('content-type','multipart/form-data');

     var link = this.url + '/booking/store';

     this.http.post(link,{
       form:form.value,

     },{
        headers: headers
     }).subscribe(data => {
      if(data != null){
         var message = "Thanks for Booking You will recieve your confirmation email within 24 hours! ";
         return message;
      }
     }, error => {
       console.log(error);
     });

     return this.data;
  }

  searchHotel(string:string){
    if(string == ''){
      this.load();
    }else{
     var array = this.hotels.filter((item) => {
          return item.name.startsWith(string);
      });
    }
    this.hotels = array;

  }

}
