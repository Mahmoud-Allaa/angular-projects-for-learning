import { Component, OnInit } from '@angular/core';
import { ProductCard1Component } from '../shared/product-card-1/product-card-1.component';
import { ProductCard2Component } from '../shared/product-card-2/product-card-2.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductCard1Component, ProductCard2Component, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  fProducts: any[] = [];
  lProducts: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.fProducts = this.products.slice(0, 4); // First 4 products
      this.lProducts = this.products.slice(-6);   // Last 6 products
      console.log(this.products.slice(0, 4));
    });
  }
}
