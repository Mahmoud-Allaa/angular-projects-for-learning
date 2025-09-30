import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems, selectCartTotal } from '../../store/cart.selectors';
import { clearCart, removeItem } from '../../store/cart.actions';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CartItemComponent } from '../shared/cart-item/cart-item.component';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-cart',
  imports: [
    CartItemComponent,
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    PageHeaderComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$: Observable<any[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }

  removeFromCart(id: number) {
    this.store.dispatch(removeItem({ productId: id }));
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
