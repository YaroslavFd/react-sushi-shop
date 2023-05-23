import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";

export const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
      </div>
    </div>
  );
};
