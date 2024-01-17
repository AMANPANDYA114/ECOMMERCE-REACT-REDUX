import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './splices/CartSlice';
import CategorySlice from './splices/CategorySlice';

const store = configureStore({
  reducer: {
    cart: CartSlice,
    category:CategorySlice,
    
  },
});

export default store;
