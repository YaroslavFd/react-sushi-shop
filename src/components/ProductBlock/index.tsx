import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addItem } from "../../redux/cart/slice";
import { RootState } from "../../redux/store";
import { Button } from "../../UI/Button";

import styles from './styles.module.scss';

interface ProductBlockProps {
  id: string;
  imageUrl: string;
  title: string;
  descr: string;
  grams: number;
  price: number;
}

export const ProductBlock: React.FC<ProductBlockProps> = ({
  id,
  imageUrl,
  title,
  descr,
  grams,
  price,
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
    <div className={styles.product}>
      <Link to={`/product/${id}`}>
        <div className={styles.productImage}>
          <img src={imageUrl} alt={title} />
        </div>
        <h4 className={styles.productTitle}>{title}</h4>
      </Link>
      <div className={styles.productContent}>
        <div className={styles.descr}>
          <p>{descr}</p>
          <span>{grams} г.</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price} ₽</div>
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
    </div>
  );
};
