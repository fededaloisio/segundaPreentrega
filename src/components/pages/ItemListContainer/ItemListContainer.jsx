import ItemList from "./ItemList";
import { getItems } from "../../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    getItems().then((res) => {
      if (category) {
        const productsFilter = res.filter(product => product.category === category);
        setItems(productsFilter);
      } else {
        setItems(res);
      }
      setIsLoading(false);
    });
  }, [category]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            style={{ height: "444px" }}
            src="https://media1.tenor.com/m/FawYo00tBekAAAAC/loading-thinking.gif"
            alt=""
          />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;