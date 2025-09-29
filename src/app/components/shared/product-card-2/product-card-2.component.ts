import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addItem } from '../../../store/cart.actions';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card-2',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card-2.component.html',
  styleUrl: './product-card-2.component.scss'
})
export class ProductCard2Component {
  @Input() product: any;
  constructor(private store: Store) {}

  addToCart(){
    if (this.product) {
      this.store.dispatch(addItem({ product: this.product }));
      console.log('Added to cart:', this.product);
    }
  }
}
