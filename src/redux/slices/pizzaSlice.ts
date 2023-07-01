import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}

export type SearchPizzaParams = {
  sortBy: string;
  categorySort: string;
  search: string;
  currentPage: string;
};

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchItems",
  async (params) => {
    const { categorySort, sortBy, search, currentPage } = params;

    const { data } = await axios.get<Pizza[]>(
      `https://646cc9cc7b42c06c3b2c045f.mockapi.io/items?page=${currentPage}&limit=4&${categorySort}&sortBy=${sortBy}${search}`
    );

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export default pizzaSlice.reducer;
