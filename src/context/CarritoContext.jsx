import React, { createContext, useState } from "react";
import { useProductosContext } from "./ProductosContext";
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto
export function CarritoProvider({ children }) {
  const [productosCarrito, setProductosCarrito] = useState([]);
    const { productos, descontarStock, restaurarStock } = useProductosContext();

  
//   const agregarAlCarrito = (producto) => {
//     const existe = productosCarrito.find((p) => p.id === producto.id);
//     console.log(existe);
//     if (existe) {
//       const carritoActualizado = productosCarrito.map((p) => {
//         if (p.id === producto.id) {
//           const productoActualizado = {
//             ...p,
//             cantidad: p.cantidad + producto.cantidad,
//           };
//           return productoActualizado;
//         } else {
//           return p;
//         }
//       });
//       setProductosCarrito(carritoActualizado);
//     } else {
//       // Si no existe, lo agregamos con su cantidad
//       const nuevoCarrito = [...productosCarrito, producto];
//       setProductosCarrito(nuevoCarrito);
//     }
//   };

// function aumentarCantidad(id) {
//   const carritoActualizado = productosCarrito.map((producto) =>
//     producto.id === id
//       ? { ...producto, cantidad: producto.cantidad + 1 }
//       : producto
//   );
//   setProductosCarrito(carritoActualizado);
// }

// function disminuirCantidad(id) {
//   const carritoActualizado = productosCarrito.map((producto) =>
//     producto.id === id && producto.cantidad > 1
//       ? { ...producto, cantidad: producto.cantidad - 1 }
//       : producto
//   );
//   setProductosCarrito(carritoActualizado);
// }

const agregarAlCarrito = (producto) => {
  const existe = productosCarrito.find((p) => p.id === producto.id);

  if (existe) {
    const carritoActualizado = productosCarrito.map((p) => {
      if (p.id === producto.id) {
        const nuevaCantidad = p.cantidad + producto.cantidad;
        const productoEnStock = productos.find((prod) => prod.id === producto.id);

        // Verificá que haya stock suficiente
        if (nuevaCantidad <= productoEnStock.stock) {
          descontarStock(producto.id, producto.cantidad);
          return { ...p, cantidad: nuevaCantidad };
        } else {
          alert("No hay suficiente stock disponible.");
          return p;
        }
      } else {
        return p;
      }
    });
    setProductosCarrito(carritoActualizado);
  } else {
    descontarStock(producto.id, producto.cantidad);
    setProductosCarrito([...productosCarrito, producto]);
  }
};


function aumentarCantidad(id) {
    const productoCarrito = productosCarrito.find((p) => p.id === id);
        const productoStock = productos.find((p) => p.id === id);


if (productoCarrito && productoStock && productoCarrito.cantidad < productoStock.stock) {
      const carritoActualizado = productosCarrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad + 1 }
          : producto
      );
      descontarStock(id, 1);
      setProductosCarrito(carritoActualizado);
    } else {
      alert("No hay más stock disponible");
    }
  };




const disminuirCantidad = (id) => {
    const productoCarrito = productosCarrito.find((p) => p.id === id);

    if (productoCarrito && productoCarrito.cantidad > 1) {
      const carritoActualizado = productosCarrito.map((producto) =>
        producto.id === id
          ? { ...producto, cantidad: producto.cantidad - 1 }
          : producto
      );
      restaurarStock(id, 1);
      setProductosCarrito(carritoActualizado);
    }
  };



  // const vaciarCarrito = () => {
  //   setProductosCarrito([]);
  // };

  // function borrarProductoCarrito(id) {
  //   console.log(id)
  //   const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
  //   setProductosCarrito(nuevoCarrito);
  // }


 const borrarProductoCarrito = (id) => {
    const producto = productosCarrito.find((p) => p.id === id);
    if (producto) {
      restaurarStock(id, producto.cantidad);
    }
    setProductosCarrito((prev) => prev.filter((p) => p.id !== id));
  };


   const vaciarCarrito = () => {
    productosCarrito.forEach((producto) => {
      restaurarStock(producto.id, producto.cantidad);
    });
    setProductosCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ productosCarrito, agregarAlCarrito, vaciarCarrito, borrarProductoCarrito, aumentarCantidad, disminuirCantidad}}
    >
      {children}
    </CarritoContext.Provider>
  );
}
