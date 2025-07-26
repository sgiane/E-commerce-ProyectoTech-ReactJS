import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";
import { useProductosContext } from "../context/ProductosContext";

function ProductoDetalle({}) {

  const {agregarAlCarrito} = useContext(CarritoContext)
  const {productoEncontrado, obtenerProducto} = useProductosContext();

  const { id } = useParams();
  // const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  console.log(id)

  useEffect(() => {
    obtenerProducto(id).then(()=> {
      setCargando(false);
    }).catch((error) => {
      if (error == "Producto no encontrado."){
        setError("Producto no encontrado.")
      }
      if (error == "Hubo un error al obtener el producto."){
        setError("Hubo un error al obtener el producto.")
      }
            setCargando(false);
    })
  }, [id]);

  function funcionCarrito() {
    if (cantidad < 1) return;
    dispararSweetBasico("Producto Agregado", "El producto fue agregado al carrito con éxito", "success", "Cerrar");
    agregarAlCarrito({ ...productoEncontrado, cantidad });
  }

  function sumarContador() {
    setCantidad(cantidad + 1);
  }

  function restarContador() {
    if (cantidad > 1) setCantidad(cantidad - 1);
  }

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!productoEncontrado) return null;

  return (
    <div className="detalle-container">
      
      <img className="detalle-imagen" src={productoEncontrado.imagen} alt={productoEncontrado.name} />
      <div className="detalle-info">
        <h2>{productoEncontrado.name}</h2>
        <p>{productoEncontrado.description}</p>
        <p>{productoEncontrado.price} $</p>
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
