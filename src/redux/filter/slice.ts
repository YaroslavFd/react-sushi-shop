import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, SortType } from "./types";

const initialState: FilterSliceState = {
  searchValue: "",
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
    changeCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },

    changeSortType: (state, action: PayloadAction<SortType>) => {
      state.sortType = action.payload;
    },

    changeCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      state.sortType = action.payload.sortType;
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const {
  changeCategory,
  changeSortType,
  changeCurrentPage,
  setFilters,
  setSearchValue,
} = filterSlice.actions;
