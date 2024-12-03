import classes from './Navbar.module.css'
import Cartwidget from '../CartWidget/Cartwidget'

const Navbar = (props) => {
    return (
        <header className={classes.header}>
          <nav>
            <h3 style={{ color: 'blue', fontSize: 30}}>{props.title}</h3>

                <button>Perros</button>
                <button>Gatos</button>
                <button>Juguetitos y más</button>
                <button>Recomendaciones</button>

                <Cartwidget />
          </nav>

        </header>
    )
}

export default Navbar