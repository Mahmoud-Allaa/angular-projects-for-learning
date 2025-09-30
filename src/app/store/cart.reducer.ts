import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } from './cart.actions';

export interface CartState {
  items: any[];
}

export const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { product }) => {
    const existingItem = state.items.find(item => item.id === product.id);
    if (existingItem) {
      return {
        ...state,
        items: state.items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }]
      };
    }
  }),
  on(removeItem, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId)
  })),
  on(clearCart, state => ({
    ...state,
    items: []
  })),
  on(increaseQuantity, (state, { productId }) => ({
    ...state,
    items: state.items.map(item => 
      item.id === productId 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  })),
  on(decreaseQuantity, (state, { productId }) => ({
    ...state,
    items: state.items.map(item => 
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  }))
);
