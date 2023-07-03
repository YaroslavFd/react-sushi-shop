export type SortType = {
  id: number;
  name: string;
  sortProperty: "rating" | "title" | "price";
  order: "desc" | "asc";
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sortType: SortType;
}
