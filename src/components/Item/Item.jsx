import { Link } from "react-router-dom"

const Item = ({ id, nombre, categoria, precio, img }) => {
    return (
        <article>
            <h4>Categoria: {categoria}</h4>
            <h3>{nombre}</h3>
            <img src={img} style={{ width: 100}} />
            <h4>${precio}</h4>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </article>
    )
}

export default Item