import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [PageHeaderComponent, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productsService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }
}
