const cart = require("./assets/carrito_1.png");

const CartWidget = () => {
    return (
        <div>
           <img src={cart} alt="carrito" style={{width: '30px'}} />
            
        </div>
    );
}

export default CartWidget