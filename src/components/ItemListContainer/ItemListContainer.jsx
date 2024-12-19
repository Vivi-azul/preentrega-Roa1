import {useState,  useEffect } from "react"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        getProducts()
        .then(result => {
            setProducts(result)
        })
    }, [])
   
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