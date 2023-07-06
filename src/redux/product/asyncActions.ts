import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType, SearchProductParams } from "./types";

export const fetchItems = createAsyncThunk<ProductType[], SearchProductParams>(
  "product/fetchItems",
  async (params) => {
    const { categorySort, sortBy, search, currentPage } = params;

    const { data } = await axios.get<ProductType[]>(
      `https://646cc9cc7b42c06c3b2c045f.mockapi.io/items?page=${currentPage}&limit=4&${categorySort}&sortBy=${sortBy}${search}`
    );

    return data;
  }
);
