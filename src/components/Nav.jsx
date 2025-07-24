import { Link } from "react-router-dom";
import "../styles/Nav.css"
import icoCart from "../assets/cart-icon.svg"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Nav({}) {

    const {productosCarrito} = useContext(CarritoContext)
    return ( 
        <nav className="navbar">  
            <ul className="navbar-items">  
                <li className="navbar-item" id="navbar-item"><Link to="/">Inicio</Link></li>  
                <li className="navbar-item" id="navbar-item"><Link to="/nosotros">Nosotros</Link></li>  
                <li className="navbar-item" id="navbar-item"><Link to="/productos">Productos</Link></li>
                <li className="navbar-item" id="navbar-item"><Link to="/contacto">Contacto</Link></li>  
                <li className="navbar-item" id="navbar-item"><Link to="/admin">Admin</Link></li> 
                <li className="navbar-item" id="navbar-item"><Link to="/login">Login</Link></li>  
                {/* <li className="navbar-item" id="navbar-item">
                    <Link to="/carrito">  
                    <img src={icoCart} alt="Carrito" /> <span className="cant-carrito-nav">{productosCarrito.length > 0 ? productosCarrito.length : ""}</span></Link></li>  */}
                <li className="navbar-item carrito-item">
                    <Link to="/carrito" className="carrito-link">
                        <img src={icoCart} alt="Carrito" />
                        {productosCarrito.length > 0 && (
                            <span className="carrito-contador">{productosCarrito.length}</span>
                        )}
                    </Link>
                </li>
            </ul>
        </nav>
    );  
}


export default Nav; 


