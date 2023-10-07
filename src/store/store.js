import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartSlice';
import addressReducer from './reducers/addressSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    address: addressReducer,
  },
});

export default store;
