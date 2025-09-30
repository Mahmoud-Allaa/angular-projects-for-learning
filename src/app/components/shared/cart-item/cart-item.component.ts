import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { increaseQuantity, decreaseQuantity, removeItem } from '../../../store/cart.actions';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() product: any;

  constructor(private store: Store) {}

  increaseCount() {
    this.store.dispatch(increaseQuantity({ productId: this.product.id }));
    console.log('Increased quantity for product:', this.product.id);
  }

  decreaseCount() {
    if (this.product.quantity > 1) {
      this.store.dispatch(decreaseQuantity({ productId: this.product.id }));
      console.log('Decreased quantity for product:', this.product.id);
    }
  }

  removeItem() {
    this.store.dispatch(removeItem({ productId: this.product.id }));
    console.log('Removed product from cart:', this.product.id);
  }

  get total() {
    return this.product.price * this.product.quantity;
  }
}
