import React from "react";

interface ICategoriesProps {
  id: number;
  onChangeCategory: (i: number) => void;
}

export const Categories: React.FC<ICategoriesProps> = ({
  id,
  onChangeCategory,
}) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          const className = id === i ? "active" : "";
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
