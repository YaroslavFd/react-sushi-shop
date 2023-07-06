import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterReducer from "./filter/slice";
import cartReducer from "./cart/slice";
import productReducer from "./product/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    product: productReducer,
  },
});
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
