import React from "react";
import { useSelector } from "react-redux";

import { Categories, categories } from "../components/Categories";
import { ProductBlock } from "../components/ProductBlock";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/ProductBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { ContentError } from "../components/ContentError";

import { changeCategory, changeCurrentPage } from "../redux/filter/slice";
import { fetchItems } from "../redux/product/asyncActions";
import { RootState, useAppDispatch } from "../redux/store";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.product);

  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  const onChangeCategory = (id: number) => {
    dispatch(changeCategory(id));
    dispatch(changeCurrentPage(1));
  };

  const fetchSushi = async () => {
    const categorySort = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = `${sortType.sortProperty}&order=${sortType.order}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchItems({
        categorySort,
        sortBy,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    fetchSushi();
  }, [categoryId, sortType, searchValue, currentPage]);

  const products = items.map((item) => {
    return <ProductBlock key={item.id} {...item} />;
  });

  const skeletons = [...Array(4)].map((_, i) => {
    return <Skeleton key={i} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories id={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">
        {categoryId ? categories[categoryId] : "Все роллы и суши"}
      </h2>
      {status === "error" ? (
        <ContentError />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : products}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        onChangePage={(page: number) => dispatch(changeCurrentPage(page))}
      />
    </div>
  );
};
