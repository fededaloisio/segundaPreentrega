
import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div style={{display: "flex", marginTop: "15px"}}>
      {items.map(({ id, title, price, description, img }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            price={price}
            description={description}
            img={img}
          />
        );
      })}
    </div>
  );
};

export default ItemList;