import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort, sortList } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { ContentError } from "../components/ContentError";

import {
  changeCategory,
  changeCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchItems } from "../redux/slices/pizzaSlice";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { items, status } = useSelector((state: any) => state.pizza);

  const { categoryId, sortType, currentPage, searchValue } = useSelector(
    (state: any) => state.filter
  );

  const onChangeCategory = (id: number) => {
    dispatch(changeCategory(id));
  };

  const fetchPizzas = async () => {
    const categorySort = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = `${sortType.sortProperty}&order=${sortType.order}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      // @ts-ignore
      fetchItems({
        categorySort,
        sortBy,
        search,
        currentPage,
      })
    );
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortId: sortType.id,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortType = sortList.find(
        (item) => Number(item.id) === Number(params.sortId)
      );

      dispatch(
        setFilters({
          ...params,
          sortType,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((item: any) => {
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
