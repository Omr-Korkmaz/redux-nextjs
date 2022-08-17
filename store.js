import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from './features/cart.slice';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;