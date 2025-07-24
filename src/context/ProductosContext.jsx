import React, { createContext, useState, useContext } from 'react';
// Crear el contexto de autenticación
const ProductosContext = createContext();
export function ProductosProvider({ children }) {
    const [productos, setProductos] = useState([]);

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
                        // setCargando(false);
                    })
                    .catch((error) => {
                        console.log("Error", error)
                        // setError('Hubo un problema al cargar los productos.');
                        // setCargando(false);
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
                //   alert("Producto agregado correctamente");
            } catch (error) {
                console.error(error.message);
                rej(error.message)
                //   alert("Hubo un problema al agregar el producto.");
            }
        });
    }


    return (
        <ProductosContext.Provider value={{ obtenerProductos, productos, agregarProducto }}>
            {children}
        </ProductosContext.Provider>);
}
export const useProductosContext = () => useContext(ProductosContext);