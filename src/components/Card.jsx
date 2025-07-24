import { useState } from "react";
import "../styles/Productos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";

function Card({producto}){

    return(
        <div className="producto-card" >
            <div className="img-card">
                <img className="producto-image" src={producto.imagen}></img>
            </div>
            <div className="detalles">
            <p className="nombre-prod">{producto.name}</p>
            <p className="precio-prod">{producto.price} $</p>
            <Link to={"/productos/" + producto.id}><button className="boton-card-producto">Ver detalles del producto</button></Link>
            </div>
        </div>
    )
}

export default Card