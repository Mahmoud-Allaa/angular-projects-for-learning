import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { ShopCardComponent } from '../shared/shop-card/shop-card.component';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [PageHeaderComponent, ShopCardComponent, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  products: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

}
