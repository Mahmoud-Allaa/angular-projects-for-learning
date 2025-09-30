import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { addItem } from '../../../store/cart.actions';

@Component({
  selector: 'app-shop-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.scss'
})
export class ShopCardComponent {
  @Input() product: any;
  constructor(private store: Store) {}
  
  addToCart(){
    if (this.product) {
      this.store.dispatch(addItem({ product: this.product }));
      console.log('Added to cart:', this.product);
    }
  }
}
