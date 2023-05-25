import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { SearchCotext } from "../App";

export const Home = () => {
  const { searchValue } = useContext(SearchCotext);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    id: 0,
    name: "популярности (↓)",
    sortProperty: "rating",
    order: "desc",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const categorySort = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = `${sortType.sortProperty}&order=${sortType.order}`;
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://646cc9cc7b42c06c3b2c045f.mockapi.io/items?page=${currentPage}&limit=4&${categorySort}&sortBy=${sortBy}${search}`
      )
      .then((result) => {
        setItems(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));

    window.scrollTo(0, 0);
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
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination
        currentPage={currentPage}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </div>
  );
};
