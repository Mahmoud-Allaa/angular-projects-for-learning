import { Component, Input } from '@angular/core';
import { addItem } from '../../../store/cart.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card-1',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card-1.component.html',
  styleUrl: './product-card-1.component.scss'
})
export class ProductCard1Component {
  @Input() product: any;
  constructor(private store: Store) {}
  addToCart(){
      if (this.product) {
        this.store.dispatch(addItem({ product: this.product }));
        console.log('Added to cart:', this.product);
      }
    }
}
