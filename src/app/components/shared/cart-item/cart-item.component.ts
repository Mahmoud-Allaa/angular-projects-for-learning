import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule, MatIcon],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() product: any = {
    id: 1,
    name: 'Sample Product',
    price: 100,
    quantity: 2,
    image: 'https://via.placeholder.com/150'
  };

  increaseCount() {
    this.product.quantity += 1;
  }

  decreaseCount() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1;
    }
  }

  get total() {
    return this.product.price * this.product.quantity;
  }
}
