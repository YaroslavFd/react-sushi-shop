import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchItems = createAsyncThunk(
  "pizza/fetchItems",
  async (params) => {
    const { categorySort, sortBy, search, currentPage } = params;

    const { data } = await axios.get(
      `https://646cc9cc7b42c06c3b2c045f.mockapi.io/items?page=${currentPage}&limit=4&${categorySort}&sortBy=${sortBy}${search}`
    );

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchItems.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export default pizzaSlice.reducer;
