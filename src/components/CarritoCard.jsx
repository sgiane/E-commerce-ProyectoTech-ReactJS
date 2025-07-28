import imgElim from "../assets/Eliminar.png"
import "../styles/Carrito.css"


function CarritoCard({producto, funcionDisparadora, aumentarCantidad, disminuirCantidad}){


    
    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

    return(
        <div className="carrito-card" >
            <div className="prod-carrito">
            <img className="carrito-image" src={producto.imagen}></img>
            <p className="carrito-producto">{producto.name}</p>
            </div>
            {<p className="descripcion-carrito">{producto.description}</p>}


        <div className="cantidad-control">
                <button className="btncant" onClick={() => disminuirCantidad(producto.id)}>-</button>
                <span className="cant">{producto.cantidad}</span>
                <button className="btncant" onClick={() => aumentarCantidad(producto.id)}>+</button>
            </div>
            


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