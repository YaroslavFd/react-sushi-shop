import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const calcTotalPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      calcTotalPrice(state);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      findItem.count--;

      if (findItem.count < 1) {
        state.items = state.items.filter((item) =>
          item.count === 0 ? null : item.count
        );
      }

      calcTotalPrice(state);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      calcTotalPrice(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart, minusItem } = cartSlice.actions;
