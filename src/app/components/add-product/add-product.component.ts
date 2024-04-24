import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../models/item';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  public name: string|null = null;
  public quantity:number|null = 1;
  
  public orders: Item[];

  public constructor(private orderService:OrderService) {
    this.orders = orderService.orders;
  }

  public addItem() {
    if (this.name != null && this.quantity != null){
      this.orderService.addItem({
        name: this.name,
        quantity: this.quantity
      })
    }
    this.name = null;
    this.quantity = 1;
  }

  public isNaN(i:number|null){
    if (i!=null) {
      return isNaN(i);
    } 
    return false;
  }
}
