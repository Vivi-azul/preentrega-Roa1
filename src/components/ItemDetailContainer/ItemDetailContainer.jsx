import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts, getProductByCategoria, getProductsBydescripción } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    cont [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
      getProductById(itemId)
        .then(result => {
          setProduct(result)
        })
    }, [itemId])

    return (
      <main>
        <h1>Detalle de los Porductos</h1>
        <ItemDetail {...product} />
      </main>
    )
    }
  

export default ItemDetailContainer