import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

// نجيب state الكارت كله
export const selectCart = createFeatureSelector<CartState>('cart');

// نجيب كل العناصر
export const selectCartItems = createSelector(
  selectCart,
  (state: CartState) => state.items
);

// نجيب العدد الكلي
export const selectCartCount = createSelector(
  selectCart,
  (state: CartState) => state.items.length
);

// نجيب السعر الكلي
export const selectCartTotal = createSelector(
  selectCart,
  (state: CartState) =>
    state.items.reduce((total, item) => total + item.price, 0)
);
