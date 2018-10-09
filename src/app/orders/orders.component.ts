import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private database: DatabaseService) { }
  orders : any;

  ngOnInit() {
    this.orders = this.database.getData('orders')
    this.orders.subscribe(val =>{
      val.forEach(element => {
        console.log(element)
      });
    }) 
  }
}
