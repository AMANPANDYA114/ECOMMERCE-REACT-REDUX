// import { createSlice } from '@reduxjs/toolkit';

// const CartSlice = createSlice({
//     name: "cart",
//     initialState: {
//       cart: [],
//     },
//     reducers: {
      
//       addTocart: (state, action) => {
//         const existingItem = state.cart.find((item) => item.id === action.payload.id);
//         if (existingItem) {
//           state.cart = state.cart.map((item) =>
//             item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//           );
//         } else {
//           state.cart.push(action.payload);
//         }
        
//         // state.cart.push(action.payload);
//       },
//       removeFromCart: (state, action) => {
//         console.log('Removing from cart:', action.payload);
//             state.cart = state.cart.filter((item) => item.id !== action.payload.id);
         
        
//       },
//     },
    
//     incrementQty: (state, action) => {
//       state.cart = state.cart.map((item) =>
//         item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//       );
//     },
//     decrementQty: (state, action) => {
//       state.cart = state.cart.map((item) =>
//         item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
//       );
//     },
    
//     });
    
//   export const { addTocart, removeFromCart,incrementQty,decrementQty } = CartSlice.actions;
//   export default CartSlice.reducer;
  
import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addTocart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      console.log('Removing from cart:', action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addTocart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
