import { Component, OnInit, Input, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { RestServiceService } from '../rest-service.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @Input() hotel;
  @Input() room;

  closeResult: string;
  bookForm:FormGroup;
  years:any = [];
  months:any = [];

  constructor(private modalService: NgbModal, public rest:RestServiceService) {

    for(var i=0; i < 8; i ++){
      this.years[i] = (2019 + i);
    }
    for(var i=1; i <13; i++ ){
      this.months[i-1] = i;
    }

  	this.bookForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      address_line: new FormControl(''),
      address_line_2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      cc_number: new FormControl(''),
      cc_exp_month: new FormControl(''),
      cc_exp_year: new FormControl(''),
      hotel_id: new FormControl(''),
      room_id:new FormControl(''),
      status:new FormControl('Paid'),
      price:new FormControl(''),

    });
  }

  ngOnInit() {
  }


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  bookRoom(){
    var message = this.rest.makeBook(this.bookForm);
    
  }  



  

}

