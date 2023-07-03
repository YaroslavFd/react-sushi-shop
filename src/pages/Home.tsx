import React from "react";
import { useSelector } from "react-redux";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { ContentError } from "../components/ContentError";

import { changeCategory, changeCurrentPage } from "../redux/filter/slice";
import { fetchItems } from "../redux/pizza/asyncActions";
import { RootState, useAppDispatch } from "../redux/store";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector((state: RootState) => state.pizza);

  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state: RootState) => state.filter
  );

  const onChangeCategory = (id: number) => {
    dispatch(changeCategory(id));
    dispatch(changeCurrentPage(1));
  };

  const fetchPizzas = async () => {
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
    fetchPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((item) => {
    return <PizzaBlock key={item.id} {...item} />;
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
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <ContentError />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        onChangePage={(page: number) => dispatch(changeCurrentPage(page))}
      />
    </div>
  );
};
