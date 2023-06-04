import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { SearchCotext } from "../App";

import { changeCategory } from "../redux/slices/filterSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { searchValue } = useContext(SearchCotext);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId, sortType } = useSelector((state) => state.filter);

  const onChangeCategory = (id) => {
    dispatch(changeCategory(id));
  };

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
        <Categories id={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
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
