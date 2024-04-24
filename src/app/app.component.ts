import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddProductComponent, ListProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant';
}
