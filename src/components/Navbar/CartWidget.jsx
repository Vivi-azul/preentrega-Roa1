import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {

  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal()

  return (
    <Link to="/carrito" className="cartwidget">
      <FaCartShopping size={35} />
      <p>{ cantidad > 0 && cantidad }</p>
    </Link>
  )
}
export default CartWidget