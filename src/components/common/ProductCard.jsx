import React, { useState } from "react";
import styles from "../../css/ProductCard.module.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, title, description, price, img }) => {
  console.log(id);

  return (
    <div className={styles.productContainer}>
      <img className={styles.productImage} src={img} alt={description} />
      <h2 className={styles.productTitle}> {title} </h2>
      <h3 className={styles.productDescription}> {description} </h3>
      <h3 className={styles.productPrice}> ${price} </h3>
      <Link to={`/item/${id}`}>
  <button className={styles.btn}>Ver</button>
</Link>
    </div>
  );
};

export default ProductCard;
