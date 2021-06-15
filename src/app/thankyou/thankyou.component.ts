import { Component, OnInit } from '@angular/core';
import { ApiService } from '../chuck/servicios/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent  {
  
  constructor (private rest: ApiService) {

  }

  placeOrder() {

    this.rest.almacenaOrden(0, 0, 0, 0, 0);
  }
}
