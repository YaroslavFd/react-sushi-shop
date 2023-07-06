import React from "react";

interface ICategoriesProps {
  id: number;
  onChangeCategory: (i: number) => void;
}
export const categories: string[] = [
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
