
export const ProductCard = ({ title, description, price, img }) => {
  return (
    <div style={{ border: "3px solid black" }}>
      <img style={{ width: "220px" }} src={img} alt={description} />
      <h2> {title} </h2>
      <h3> {description} </h3>
      <h3> {price} </h3>
    </div>
  );
};

export default ProductCard;
