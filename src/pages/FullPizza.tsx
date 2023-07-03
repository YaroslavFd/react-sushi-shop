import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Pizza } from "../redux/pizza/types";

export const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = React.useState<Pizza>();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<Pizza>(
          "https://646cc9cc7b42c06c3b2c045f.mockapi.io/items/" + id
        );
        setItem(data);
      } catch (error) {
        alert("Что-то пошлок не так :/");
        navigate("/");
      }
    })();
  }, []);

  if (!item) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="container">
      <img
        style={{ width: 300, height: 300 }}
        src={item.imageUrl}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <h4>{item.price} ₽</h4>
    </div>
  );
};
