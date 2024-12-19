import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount.jsx"; 

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {
      ...producto,
      cantidad: contador
    };
    agregarProducto(productoCarrito);
  };

  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} />
      <div className="detail">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
        <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} /> 
      </div>
    </div>
  );
};

export default ItemDetail;