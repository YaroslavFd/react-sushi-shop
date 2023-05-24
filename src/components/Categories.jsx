export const Categories = ({ category, changeCategoty }) => {
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
          const className = category === i ? "active" : "";
          return (
            <li
              key={item}
              className={className}
              onClick={() => changeCategoty(i)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
