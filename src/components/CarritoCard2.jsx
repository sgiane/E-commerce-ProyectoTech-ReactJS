import imgElim from "../assets/Eliminar.png"
import "../styles/Carrito.css"

function CarritoCard2({ producto, funcionDisparadora, aumentarCantidad, disminuirCantidad }) {

    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

    return (


        <div className="carrito-card" >

            <div className="prod-carrito2">

                <div className="prod-producto">
                    <p className="titulos-card2"> Producto: </p>
                    <div className="prod-img-card2">
                        <p className="carrito-producto2">{producto.name}</p>
                        <img className="carrito-image imagen-card2" src={producto.imagen}></img>
                    </div>

                </div>
            </div>

            <div className="prod-descripcion">
                <p className="titulos-card2">Descripción:</p>
                {<p className="descripcion-carrito2">{producto.description}</p>}
            </div>


            <div className="cantidad-control">
                <button className="btncant" onClick={() => disminuirCantidad(producto.id)}>-</button>
                <span>{producto.cantidad}</span>
                <button className="btncant" onClick={() => aumentarCantidad(producto.id)}>+</button>
            </div>

            <div className="prod-unitario">
                <p className="titulos-card2"> Precio unitario: </p>
                <span>{producto.price} $</span>
            </div>

            <div className="prod-subtotal">
                <div> <p className="titulos-card2"> Sub Total: </p></div>
                <span>{producto.cantidad * producto.price} $</span>
            </div>

            <button className="boton-carrito" onClick={borrarDelCarrito}>
                <img src={imgElim} alt="Icono eliminar" />
            </button>
        </div>

    )
}

export default CarritoCard2