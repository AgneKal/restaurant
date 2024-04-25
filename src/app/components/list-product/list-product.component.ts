import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  public orders:Item[];
  public constructor(private orderService:OrderService) {
    this.orders = orderService.orders;
  }

  public deleteNote(i:number){
    this.orderService.deleteNote(i);
  }

}
