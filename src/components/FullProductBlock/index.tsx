import React from "react";

import styles from "./styles.module.scss";
import { nutritionalValueType } from "../../redux/product/types";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addItem } from "../../redux/cart/slice";

interface FullProductBlockProps {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  descr: string;
  grams: number;
  nutritionalValue: nutritionalValueType;
}

export const FullProductBlock: React.FC<FullProductBlockProps> = ({
  id,
  title,
  imageUrl,
  price,
  descr,
  grams,
  nutritionalValue,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      grams,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <span className={styles.grams}>{grams} г</span>
        <p className={styles.descr}>{descr}</p>
        <div className={styles.table}>
          <div className={styles.tableItem}>
            Пищевая ценность продукта (100г)
          </div>
          <div className={styles.tableItem}>
            Белки <span>{nutritionalValue.proteins} г</span>
          </div>
          <div className={styles.tableItem}>
            Жиры <span>{nutritionalValue.fats} г</span>
          </div>
          <div className={styles.tableItem}>
            Углеводы <span>{nutritionalValue.carbohydrates} г</span>
          </div>
          <div className={styles.tableItem}>
            Энерг. ценность <span>{nutritionalValue.energyValue} ккал</span>
          </div>
        </div>

        <Button
          appearClasses="button button--outline button--add"
          onClick={onClickAdd}
          count={addedCount}
          withPlus
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};
