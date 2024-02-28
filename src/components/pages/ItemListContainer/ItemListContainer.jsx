import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {products} from "../../../productsMockup"

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("Error");
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err)
      });
  }, []);


  return(
    <>
    <ItemList items={items}/>
    </>
  )
}
export default ItemListContainer;