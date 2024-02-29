import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getProduct } from "../../../productsMock"

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        getProduct(id)
            .then(res => {
              setProduct(res);
              setIsLoading(false);
            })
    }, [])

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
          <img style={{height: "444px"}}
            src="https://media1.tenor.com/m/FawYo00tBekAAAAC/loading-thinking.gif"
            alt=""
          />
        </div>
      ) : (
        <ItemDetail {...product}/>
      )}
    </>
  )
}

export default ItemDetailContainer


