import React, { createContext, useState, useContext } from 'react';
import { dispararSweetBasico, dispararSweetBasico2} from '../assets/SweetAlert';

// Crear el contexto de autenticación
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const [productosOriginales, setProductosOriginales] = useState([])
    const [productoEncontrado, setProductoEncontrado] = useState(null)


    function obtenerProductos() {
        return (
            new Promise((res, rej) => {
                fetch('https://682e1895746f8ca4a47be0bf.mockapi.io/productos')
                    .then((respuesta) =>
                        respuesta.json()
                    )
                    .then((datos) => {
                        console.log(datos)
                        setProductos(datos)
                        setProductosOriginales(datos)
                        res(datos)
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        rej(error)
                    });
            })
        )
    }

    function agregarProducto(producto) {
        return new Promise(async (res, rej) => {
            try {
                const respuesta = await fetch(
                    "https://682e1895746f8ca4a47be0bf.mockapi.io/productos",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(producto),
                    }
                );

                if (!respuesta.ok) {
                    throw new Error("Error al agregar el producto.");
                }
                const data = await respuesta.json();
                console.log("Producto agregado:", data);
                res(data)
            } catch (error) {
                console.error(error.message);
                rej(error.message)
            }
        });
    }


    function obtenerProducto(id){
        return(
            new Promise ((res, rej) => {
                    fetch("https://682e1895746f8ca4a47be0bf.mockapi.io/productos")
                      .then((res) => res.json())
                      .then((datos) => {
                        const productoEncontrado = datos.find((item) => item.id === id);
                        if (productoEncontrado) {
                          setProductoEncontrado(productoEncontrado);
                          res(productoEncontrado);
                        } else {
                            rej("Producto no encontrado.")
                        }

                      })
                      .catch((err) => {
                        console.log("Error:", err);
                        rej("Hubo un error al obtener el producto.");
                      });
            })
        )
    }

    function editarProducto(producto){
        return(
            new Promise(async(res, rej) => {
                try {
      const respuesta = await fetch(`https://682e1895746f8ca4a47be0bf.mockapi.io/productos/${producto.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto),
      });
      if (!respuesta.ok){
            throw new Error('Error al actualizar el producto.');
      } 
      const data = await respuesta.json();
      res(data)
          } catch (error) {
      console.error(error.message);
    rej(error)
            }
        })
    )}


const eliminarProducto = async (id) => {
  try {
    const { isConfirmed } = await dispararSweetBasico2(
      '¿Estás seguro?',
      'Esta acción eliminará el producto permanentemente.',
      'warning',
      'Sí, eliminar',
      true // mostrar botón Cancelar
    );

    if (!isConfirmed) return; // Si el usuario cancela, no hace nada

    const respuesta = await fetch(`https://682e1895746f8ca4a47be0bf.mockapi.io/productos/${id}`, {
      method: 'DELETE',
    });

    if (!respuesta.ok) throw new Error('Error al eliminar');

    // Mostrar mensaje de éxito
    dispararSweetBasico('Eliminado', 'Producto eliminado correctamente.', 'success', 'Aceptar');

  } catch (error) {
    console.error(error.message);
    dispararSweetBasico('Error', 'Hubo un problema al eliminar el producto.', 'error', 'Cerrar');
    throw error;
  }
};   

function filtrarProductos(filtro){
    if(filtro.length < 0){
        setProductos(productosOriginales)
        return;
    }

    
        const productosFiltrados = productosOriginales.filter((producto) =>
            producto.name.toLowerCase().includes(filtro.toLowerCase())
        );
        setProductos(productosFiltrados)
}


async function actualizarStockEnServidor(idProducto, nuevoStock) {
  try {
    await fetch(`https://682e1895746f8ca4a47be0bf.mockapi.io/productos/${idProducto}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock: nuevoStock }),
    });
  } catch (error) {
    console.error("Error al actualizar el stock en el servidor:", error);
  }
}

function descontarStock(idProducto, cantidad) {
  setProductos(prev => {
    const actualizado = prev.map(producto => {
      if (producto.id === idProducto) {
        const nuevoStock = producto.stock - cantidad;

        if (nuevoStock < 0) {
          console.warn("Intento de dejar stock negativo. Operación ignorada.");
          return producto; // no cambia
        }

        actualizarStockEnServidor(idProducto, nuevoStock); // sincroniza con backend
        return { ...producto, stock: nuevoStock };
      }
      return producto;
    });
    return actualizado;
  });
}


function restaurarStock(idProducto, cantidad) {
  setProductos(prev => {
    const actualizado = prev.map(producto => {
      if (producto.id === idProducto) {
        const nuevoStock = producto.stock + cantidad;

        actualizarStockEnServidor(idProducto, nuevoStock); // sincroniza con backend
        return { ...producto, stock: nuevoStock };
      }
      return producto;
    });
    return actualizado;
  });
}


    return (
        <ProductosContext.Provider 
        value={{ obtenerProductos, productos, agregarProducto, 
        obtenerProducto, productoEncontrado, editarProducto, 
        eliminarProducto, filtrarProductos, restaurarStock, descontarStock}}>
            {children}
        </ProductosContext.Provider>);
}
export const useProductosContext = () => useContext(ProductosContext);