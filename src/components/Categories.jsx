export const Categories = ({ id, onChangeCategory }) => {
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
