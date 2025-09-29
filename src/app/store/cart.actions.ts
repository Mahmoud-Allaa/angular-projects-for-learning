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
