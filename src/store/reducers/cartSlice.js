import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
const initialState = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const cartReducer = createSlice({
  name: 'cart',
  initialState: {
    items: initialState,
    cartTotalAmmount: 0,
    cartTotalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const findIndex = state.items.findIndex((item) => item.id === product.id);

      if (findIndex >= 0) {
        state.items[findIndex].cartQuantity += 1;
        toast.success(`${product.name} increased by one`, { icon: '👍' });
      } else {
        const newProduct = { ...product, cartQuantity: 1 };
        toast.success(`${product.name} added  to cart`);
        state.items.push(newProduct);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    decreseQuantity: (state, action) => {
      const product = action.payload;
      const findIndex = state.items.findIndex((item) => item.id === product.id);

      if (state.items[findIndex].cartQuantity > 1) {
        state.items[findIndex].cartQuantity -= 1;
        toast.success(`${action.payload.name} decresed by one`, { icon: '👎' });
      } else if (state.items[findIndex].cartQuantity === 1) {
        const newItems = state.items.filter((item) => item.id !== product.id);
        state.items = newItems;
        toast.success(`${action.payload.name} Remove to cart`);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeCart: (state, action) => {
      const product = action.payload;
      const newItems = state.items.filter((item) => item.id !== product.id);
      state.items = newItems;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      toast.success(`${action.payload.name} Remove to cart`);
    },

    clearCart: (state) => {
      state.items = [];
      toast('Cart Clear', { icon: '👏' });
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },

    calculateSubTotal: (state, action) => {
      const cartItem = action.payload;
      if (cartItem?.length === 0) {
        state.cartTotalAmmount = 0;
        state.cartTotalQuantity = 0;
      } else {
        const priceArray = [];
        cartItem?.map((item) => {
          const price = item?.price || item?.defaultPrice;
          const totalAmmount = price * item?.cartQuantity;
          return priceArray.push(totalAmmount);
        });
        const subTotal = priceArray.reduce((a, b) => {
          return a + b;
        });

        const allQuantity = [];
        cartItem?.map((item) => {
          return allQuantity.push(item?.cartQuantity);
        });
        const totalQuantity = allQuantity.reduce((a, b) => {
          return a + b;
        });
        state.cartTotalAmmount = subTotal;
        state.cartTotalQuantity = totalQuantity;
      }
    },
  },
});

export const { addToCart, decreseQuantity, removeCart, clearCart, calculateSubTotal } =
  cartReducer.actions;
export default cartReducer.reducer;
