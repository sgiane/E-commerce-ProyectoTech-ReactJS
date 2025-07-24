import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

function ProductoDetalle({}) {

  const {agregarAlCarrito} = useContext(CarritoContext)

  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  useEffect(() => {
    fetch("https://682e1895746f8ca4a47be0bf.mockapi.io/productos")
      .then((res) => res.json())
      .then((datos) => {
        const productoEncontrado = datos.find((item) => item.id === id);
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          setError("Producto no encontrado.");
        }
        setCargando(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setError("Hubo un error al obtener el producto.");
        setCargando(false);
      });
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...producto, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  return (
    <div className="detalle-container">
      
      <img className="detalle-imagen" src={producto.imagen} alt={producto.name} />
      <div className="detalle-info">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>{producto.price} $</p>
        <div className="detalle-contador">
          <button className="bot-cont" onClick={restarContador}>-</button>
          <span>{cantidad}</span>
          <button className="bot-cont" onClick={sumarContador}>+</button>
        </div>
        <button className="boton-card-detalle" onClick={funcionCarrito}>Agregar al carrito</button>
        <button className="cerrar"><Link className="link-cerrar" to="/productos">Cerrar</Link></button>
      </div>
      
    </div>
  );
}

export default ProductoDetalle;
