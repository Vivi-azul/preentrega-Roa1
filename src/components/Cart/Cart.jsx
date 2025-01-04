import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, totalPrecio, deleteProductById, deleteCart } = useContext(CartContext)

  if(cart.length === 0){
    return(
      <div>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart" >
      <h1 className="title-cart">Productos en carrito</h1>
      {
        cart.map((productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.imagen} width={100} alt="" />
            <p className="text-item-cart">{productCart.nombre}</p>
            <p className="text-item-cart">precio c/u: ${productCart.precio}</p>
            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">precio parcial: ${productCart.precio * productCart.quantity} </p>
            <button onClick={ ()=> deleteProductById(productCart.id) } >eliminar</button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrecio()}</p>
        <button onClick={deleteCart} >Vaciar carrito</button>
      </div>
    </div>
  )
}
export default Cart