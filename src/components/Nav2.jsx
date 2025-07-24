import { useContext, useState } from 'react';
import { Link } from "react-router-dom"; // Importamos Link de react-router-dom
import "../styles/Nav.css";
import icoCart from "../assets/cart-icon.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { CarritoContext } from '../context/CarritoContext';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


function Nav2() {

  const {productosCarrito} = useContext(CarritoContext)
  const {user, admin, logout} = useAuthContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
  logout();           // Limpia contexto y token
  navigate("/login"); // Redirige al login
};

  return (
    <div className='navContainer'>
      <Navbar expand="lg" className="navbar">
        <NavbarToggler className='toggler' style={{ backgroundColor: "#ebdbf9" }} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-items" navbar>

            <NavItem>
              <Link className="navbar-item" to="/">Inicio</Link>
            </NavItem>

            <NavItem>
              <Link className="navbar-item" to="/nosotros" >Nosotros</Link>
            </NavItem>

            <NavItem>
              <Link className="navbar-item" to="/productos" >Productos</Link>
            </NavItem>

            <NavItem>
              <Link className="navbar-item" to="/contacto" >Contacto</Link>
            </NavItem>

            {admin ? <NavItem>
              <Link className="navbar-item" to="/admin" >Admin</Link>
            </NavItem>: <></>}   

            {user ? (
  <NavItem>
    <button className="navbar-item logout-btn" onClick={handleLogout}>
      Cerrar sesión
    </button>
  </NavItem>
) : (
  <NavItem>
    <Link className="navbar-item" to="/login">Login</Link>
  </NavItem>
)}  

            {/* <NavItem>
              <Link className="navbar-item" to="/login" >Login</Link>
            </NavItem> */}

            <NavItem className="carrito-item">
              <Link className=" carrito-link" to="/carrito" >
                <img className='ico-eliminar' src={icoCart} alt="Carrito" />
                {productosCarrito.length > 0 && (
                  <span className="carrito-contador">{productosCarrito.length}</span>
                )}
              </Link>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Nav2;
