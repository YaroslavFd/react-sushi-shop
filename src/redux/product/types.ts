export type nutritionalValueType = {
  proteins: number;
  fats: number;
  carbohydrates: number;
  energyValue: number;
};

export type ProductType = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  descr: string;
  grams: number;
  nutritionalValue: nutritionalValueType;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductSliceState {
  items: ProductType[];
  status: Status;
}

export type SearchProductParams = {
  sortBy: string;
  categorySort: string;
  search: string;
  currentPage: string;
};
