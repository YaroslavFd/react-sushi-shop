import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sortType: {
    id: 0,
    name: "популярности (↓)",
    sortProperty: "rating",
    order: "desc",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.categoryId = action.payload;
    },

    changeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { changeCategory, changeSortType } = filterSlice.actions;
