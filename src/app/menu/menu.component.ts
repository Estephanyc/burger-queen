import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu = "../../assets/data.json";

  desayunos : any;
  almuerzos : any;
  pedidos: any = [];
  total : number = 0;
  pedidoCount : number = 0;

  constructor(private database: DatabaseService, private http: HttpClient) {
    this.http.get(this.menu).subscribe(data =>{
      this.desayunos = Object.values(data[0]).map(option => option)
      this.desayunos = Object.values(this.desayunos[0])
      this.almuerzos = Object.values(data[1]).map(option => option)
      this.almuerzos = Object.values(this.almuerzos[0]).map(option => option)   
    });    
  }

  ngOnInit() {}

  addItem(item){
    item['pedidoId'] = this.pedidoCount++
    this.pedidos.push(item)
    this.total+= item.precio
  }

  deleteItem(id, precio){ 
    this.total-= precio
    this.pedidos = this.pedidos.filter(item => item.pedidoId !== id)
  }

  addOrder(){
    let order = {
      "cliente" : "carla",
      "pedido" : this.pedidos
    }
    this.database.addItem(order) 
    this.pedidos = [];
    this.total = 0;
  }
}