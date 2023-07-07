import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../redux/product/types";
import { FullProductBlock } from "../components/FullProductBlock";
import { Spinner } from "../components/Spinner";

export const FullProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = React.useState<ProductType>();

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<ProductType>(
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
    return <Spinner />;
  }

  return (
    <div className="container">
      <FullProductBlock {...item} />
    </div>
  );
};
