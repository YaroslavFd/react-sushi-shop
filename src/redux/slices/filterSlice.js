import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
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

    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { changeCategory, changeSortType, changeCurrentPage } =
  filterSlice.actions;
