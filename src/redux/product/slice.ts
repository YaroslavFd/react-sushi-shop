import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./asyncActions";
import { ProductSliceState, Status } from "./types";

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,
};

const productSlice = createSlice({
  name: "product",
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

export default productSlice.reducer;
