import React, { createContext, useState, useContext } from 'react';
import { dispararSweetBasico, dispararSweetBasico2} from '../assets/SweetAlert';
// Crear el contexto de autenticación
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);
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

    //  const eliminarProducto = (id) => {
    //     const confirmar = window.confirm('¿Estás seguro de eliminar?');
    //     if (confirmar) {
    //         return(
    //             new Promise(async (res, rej) => {
    //                 try {
    //                     const respuesta = await fetch(`https://682e1895746f8ca4a47be0bf.mockapi.io/productos/${id}`, {
    //                     method: 'DELETE',
    //                     });
    //                     if (!respuesta.ok) throw new Error('Error al eliminar');
    //                     alert('Producto eliminado correctamente.');
    //                     res()
    //                 } catch (error) {
    //                     console.error(error.message);
    //                     alert('Hubo un problema al eliminar el producto.');
    //                     rej(error)
    //                 }
    //             })
    //         )
    //     }
    // }


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


    return (
        <ProductosContext.Provider value={{ obtenerProductos, productos, agregarProducto, obtenerProducto, productoEncontrado, editarProducto, eliminarProducto}}>
            {children}
        </ProductosContext.Provider>);
}
export const useProductosContext = () => useContext(ProductosContext);