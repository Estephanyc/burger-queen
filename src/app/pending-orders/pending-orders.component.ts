import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {

  pendingOrders: any;

  constructor(private database: DatabaseService) { }

  ngOnInit() {
    this.pendingOrders = this.database.getData('pendingOrders')
    this.pendingOrders.subscribe(val => {
      val.forEach(element => {
        console.log(element)
      });
    }) 
  }
  orderDone(id) {
    this.database.orderDone(id)
  }
}
