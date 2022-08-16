import data from "../pages/api/data.json";
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: data,
  amount: 3,
  total: 0,
  isLoading: true,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity--;
    },
   
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } =
  cartSlice.actions;

export default cartSlice.reducer;











//     addToCart: (state, action) => {
//       const itemExists = state.find((item) => item.id === action.payload.id);
//       if (itemExists) {
//         itemExists.quantity++;
//       } else {
//         state.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     increase: (state, { payload }) => {
//         const cartItem = state.cartItems.find((item) => item.id === payload.id);
//         console.log(cartItem)
//         // cartItem.quantity = cartItem.quantity + 1;
//       },
//     decrementQuantity: (state, {payload}) => {
//       const itemId = state.cartItems.find((item) => item.id === payload.id);
//       if (item.quantity === 1) {
//         const index = state.findIndex((item) => item.id === action.payload);
//         state.splice(index, 1);
//       } else {
//         item.quantity--;
//       }
//     },
//     // removeFromCart: (state, action) => {
//     //   const index = state.findIndex((item) => item.id === action.payload);
//     //   state.splice(index, 1);
//     // },
//     removeFromCart: (state, action) => {
//         const itemId = action.payload;
//         state.cartItems = state.cartItems.filter((item)=> item.id!==itemId);
//         // const index = state.findIndex((item) => item.id === action.payload);
//         // state.splice(index, 1);
//       },
//   },
// });

// // export const cartReducer = cartSlice.reducer;

// export default cartSlice.reducer;
// export const {
//     clearCart,
//   addToCart,
//   increase,
//   decrementQuantity,
//   removeFromCart,
// } = cartSlice.actions;
