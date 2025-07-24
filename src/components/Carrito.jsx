import "../styles/Carrito.css";
import { useContext, useEffect, useState } from "react";
import CarritoCard from "./CarritoCard.jsx";
import { Navigate } from "react-router-dom";
import CarritoCard2 from "./CarritoCard2.jsx";
import { CarritoContext } from "../context/CarritoContext.jsx";
import { useAuthContext } from "../context/AuthContext.jsx";

export default function Carrito() {
  const { user } = useAuthContext();
  const { productosCarrito, vaciarCarrito, borrarProductoCarrito } =
    useContext(CarritoContext);

  console.log("Productos: " + productosCarrito);

  const total = productosCarrito.reduce(
    (subTotal, producto) => subTotal + producto.price * producto.cantidad,
    0
  );

  function funcionDisparadora(id) {
    borrarProductoCarrito(id);
  }

  function funcionDisparadora2() {
    vaciarCarrito();
  }

  console.log("Total: " + total);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="carrito-conteiner">
      <div className="carrito-titulos">
        <p className="carrito-titulo-producto"> Producto </p>
        <p className="carrito-titulo-descripcion">Descripción</p>
        <p> Cantidad </p>
        <p> Precio unitario </p>
        <p> Sub total </p>
      </div>

      {productosCarrito.length > 0 ? (
        productosCarrito.map((producto) => (
          <div key={producto.id}>
            {/* Visible solo en pantallas grandes */}
            <div className="carrito-card1">
              <CarritoCard
                producto={producto}
                funcionDisparadora={funcionDisparadora}
              />
            </div>

            {/* Visible solo en pantallas pequeñas */}
            <div className="carrito-card2">
              <CarritoCard2
                producto={producto}
                funcionDisparadora={funcionDisparadora}
              />
            </div>
          </div>
        ))
      ) : (
        <p className="carrito-vacio">"Carrito vacío"</p>
      )}
      <button onClick={funcionDisparadora2} className="boton-card-producto">
        Vaciar Carrito
      </button>

      {total > 0 ? (
        <span className="total">
          Total a pagar: {total.toFixed(2)} $
          <button className="pagar">Ir a pagar</button>
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
