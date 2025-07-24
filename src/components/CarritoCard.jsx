import imgElim from "../assets/Eliminar.png"
import "../styles/Carrito.css"


function CarritoCard({producto, funcionDisparadora}){


    
    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

//   function sumarCantidad() {
//     setCantidad(producto.cantidad + 1);
//   }

//   function restarCantidad() {
//     if (producto.cantidad > 1) setCantidad(producto.cantidad - 1);
//   }

    return(
        <div className="carrito-card" >
            <div className="prod-carrito">
            <img className="carrito-image" src={producto.imagen}></img>
            <p className="carrito-producto">{producto.name}</p>
            </div>
            {<p className="descripcion-carrito">{producto.description}</p>}

        {/* <div className="detalle-contador">
          <button className="bot-cont" onClick={restarCantidad}>-</button> */}
          <span>{producto.cantidad}</span>
          {/* <button className="bot-cont" onClick={sumarCantidad}>+</button>
        </div> */}
            


            <div className="carrito-unitario">
                <span>{producto.price} $</span>
            </div>

            <div className="carrito-sub">
                <span>{producto.cantidad * producto.price} $</span>
            </div>


            <button className="boton-carrito" onClick={borrarDelCarrito}>
                <img src={imgElim} alt="Icono eliminar" />
            </button>
        </div>
    )
}

export default CarritoCard