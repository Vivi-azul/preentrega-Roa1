import ItemCount from "../ItemCount/ItemCount.jsx"

const ItemDetail = ({ id, nombre, categoria, precio, img, descripcion, stock }) => {
    return (
        <article>
            <h4>Categoria: {categoria}</h4>
            <h3> {nombre} </h3>
            <img src={img} style={{ width: 100}} />
            <h4>${precio}</h4>
           <h4>Descripcion: {descripcion} </h4>
           <ItemCount stock={stock} />
        </article>
    )
    }

    export default ItemDetail