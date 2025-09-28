import { Component } from '@angular/core';
import { ProductCard1Component } from '../shared/product-card-1/product-card-1.component';
import { ProductCard2Component } from '../shared/product-card-2/product-card-2.component';

@Component({
  selector: 'app-home',
  imports: [ProductCard1Component, ProductCard2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
