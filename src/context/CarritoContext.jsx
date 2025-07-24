import React, { createContext, useState } from "react";
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
  const [productosCarrito, setProductosCarrito] = useState([]);
  
  const agregarAlCarrito = (producto) => {
    const existe = productosCarrito.find((p) => p.id === producto.id);
    console.log(existe);
    if (existe) {
      const carritoActualizado = productosCarrito.map((p) => {
        if (p.id === producto.id) {
          const productoActualizado = {
            ...p,
            cantidad: p.cantidad + producto.cantidad,
          };
          return productoActualizado;
        } else {
          return p;
        }
      });
      setProductosCarrito(carritoActualizado);
    } else {
      // Si no existe, lo agregamos con su cantidad
      const nuevoCarrito = [...productosCarrito, producto];
      setProductosCarrito(nuevoCarrito);
    }
  };

function aumentarCantidad(id) {
  const carritoActualizado = productosCarrito.map((producto) =>
    producto.id === id
      ? { ...producto, cantidad: producto.cantidad + 1 }
      : producto
  );
  setProductosCarrito(carritoActualizado);
}

function disminuirCantidad(id) {
  const carritoActualizado = productosCarrito.map((producto) =>
    producto.id === id && producto.cantidad > 1
      ? { ...producto, cantidad: producto.cantidad - 1 }
      : producto
  );
  setProductosCarrito(carritoActualizado);
}

  const vaciarCarrito = () => {
    setProductosCarrito([]);
  };

  function borrarProductoCarrito(id) {
    console.log(id)
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
  }

  return (
    <CarritoContext.Provider
      value={{ productosCarrito, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito, aumentarCantidad, disminuirCantidad}}
    >
      {children}
    </CarritoContext.Provider>
  );
}
