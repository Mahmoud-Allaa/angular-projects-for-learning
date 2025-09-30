import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ product: any }>()
);

export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const increaseQuantity = createAction(
  '[Cart] Increase Quantity',
  props<{ productId: number }>()
);

export const decreaseQuantity = createAction(
  '[Cart] Decrease Quantity',
  props<{ productId: number }>()
);
