import React from "react";

import styles from "./styles.module.scss";

interface ICategoriesProps {
  id: number;
  onChangeCategory: (i: number) => void;
}
export const categoriesList: string[] = [
  "Все",
  "Роллы",
  "Запеченные",
  "Суши",
  "Сеты",
];

export const Categories: React.FC<ICategoriesProps> = ({
  id,
  onChangeCategory,
}) => {
  return (
    <div className={styles.categories}>
      <ul>
        {categoriesList.map((item, i) => {
          const className = id === i ? styles.active : "";
          return (
            <li
              key={item}
              className={className}
              onClick={() => onChangeCategory(i)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
