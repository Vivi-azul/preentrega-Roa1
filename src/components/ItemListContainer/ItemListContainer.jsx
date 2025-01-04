import {useState,  useEffect } from "react"
import { getProducts } from "../../data/data"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        getProducts()
          .then((data) => {
            if(idCategoria){
              const filterProducts = data.filter( (product) => product.categoria === idCategoria )
              setProducts(filterProducts)
            }else{
              setProducts(data)
            }
          })
          .catch((error) => {
            console.error(error)
          })
          })
    //   }, [idCategoria])
   
    return (
        <main>
            <h1>
            {greeting}
        </h1>
        <ItemList products={products}/>
        </main>
        
    )
}

export default ItemListContainer