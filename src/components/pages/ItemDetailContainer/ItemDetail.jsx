import styles from "../../../css/ProductDetail.module.css"

export const ItemDetail = ({ title, price, description, img }) => {
  return (
    <div className={styles.productContainer}>
      <h3 className={styles.productTitle}>{title}</h3>
      <h3 className={styles.productDescription} >Descripción: {description}</h3>
      <img className={styles.productImage} src={img} alt={title} />
      <h3 className={styles.productPrice}>Precio: ${price}</h3>
    </div>
  );
};

export default ItemDetail;