import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, fromDocRef } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  orders: AngularFirestoreCollection<Item[]>
  items: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.orders = afs.collection<Item[]>('orders');
  }
  addItem(data) {
    const id = this.afs.createId();
    this.orders.doc(id).set(data);
    this.afs.collection<Item[]>('pendingOrders').doc(id).set(data)
  }
  getData(path){
    this.items = this.afs.collection<Item[]>(path).snapshotChanges().pipe(
     map(val => {
      return val.map(element => {
        let item = {}
        item['data'] = element.payload.doc.data()
        item['id']= element.payload.doc.id
        console.log(item)
        return item
      });
    }))
    console.log(this.items)
    return  this.items
  }
  orderDone(id){
    this.afs.collection<Item[]>('pendingOrders').doc(id).delete()
  }
}
