import React, { useState } from "react";
import styles from "../../css/ProductCard.module.css"
export const ProductCard = ({ title, description, price, img }) => {

  return (
    <div className={styles.productContainer}>
      <img className={styles.productImage} src={img} alt={description} />
      <h2 className={styles.productTitle}> {title} </h2>
      <h3 className={styles.productDescription}> {description} </h3>
      <h3 className={styles.productPrice}> {price} </h3>
      <button className={styles.btn}>Agregar</button>
    </div>
  );
};