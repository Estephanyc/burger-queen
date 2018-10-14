import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu = "../../assets/data.json";
  client: FormGroup;
  breakfasts : any;
  lunches : any;
  orders: any = [];
  total : number = 0;
  pedidoCount : number = 0;

  constructor(private database: DatabaseService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.clientForm();
    this.http.get(this.menu).subscribe(data =>{
      this.breakfasts = Object.values(data[0]).map(option => option)
      this.breakfasts = Object.values(this.breakfasts[0])
      this.lunches = Object.values(data[1]).map(option => option)
      this.lunches = Object.values(this.lunches[0]).map(option => option)   
    });    
    console.log(this.orders)
  }

  ngOnInit() {}
  clientForm() {
    this.client = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }

  addItem(item){
    item['pedidoId'] = this.pedidoCount++
    this.orders.push(item)
    this.total+= item.precio
  }

  deleteItem(id, precio){ 
    this.total-= precio
    this.orders = this.orders.filter(item => item.pedidoId !== id)
  }

  addOrder(){
    let order = {
      "cliente": this.client.value.content,
      "pedido" : this.orders
    }
    this.database.addItem(order) 
    this.orders = [];
    this.total = 0;
    this.client.reset()
  }
}
