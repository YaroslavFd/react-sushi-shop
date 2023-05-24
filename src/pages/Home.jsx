import { useEffect, useState } from "react";
import axios from "axios";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const changeCategoty = (i) => {
    setCategory(i);
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://646cc9cc7b42c06c3b2c045f.mockapi.io/items")
      .then((result) => {
        setItems(result.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories category={category} changeCategoty={changeCategoty} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...Array(8)].map((_, i) => {
              return <Skeleton key={i} />;
            })
          : items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })}
      </div>
    </div>
  );
};
