import imgElim from "../assets/Eliminar.png"
import "../styles/Carrito.css"

function CarritoCard2({ producto, funcionDisparadora }) {

    function borrarDelCarrito() {
        console.log("Paso 1")
        funcionDisparadora(producto.id)
    }

    return (


        <div className="carrito-card" >

            {/* <div className="titulo-1"><p className="carrito-titulo-producto"> Producto </p></div>
                <div className="titulo-2"><p className="carrito-titulo-descripcion">Descripción</p></div>
                <div className="titulo-3"><p className="carrito-titulo-cantidad"> Cantidad </p></div>
                <div className="titulo-4"><p className="carrito-titulo-unitario"> Precio unitario </p></div>
                <div className="titulo-5"><p className="carrito-titulo-subtotal"> Sub total </p></div> */}


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

            <div className="prod-cantidad">
                <p className="titulos-card2"> Cantidad: </p>
                <span>{producto.cantidad}</span>
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