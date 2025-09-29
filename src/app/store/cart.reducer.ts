import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearCart } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { product }) => ({
    ...state,
    items: [...state.items, product]
  })),
  on(removeItem, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId)
  })),
  on(clearCart, state => ({
    ...state,
    items: []
  }))
);
