import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orders: Item[]=[];
  constructor() { 
    let s = localStorage.getItem('orders');
    if (s != null) {
      this.orders = JSON.parse(s);
    }
  }

  private save(){
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  public addItem(item: Item){
    this.orders.push(item);
    this.save();
  }

  public deleteItem(i: number){
    this.orders.splice(i, 1);
    this.save();
  }
}
