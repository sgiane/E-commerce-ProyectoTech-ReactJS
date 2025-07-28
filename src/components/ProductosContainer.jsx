import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from "../context/ProductosContext";

function ProductosContainer({ functionCarrito }) {
    const { productos, obtenerProductos, filtrarProductos } = useProductosContext()
    const productosPorPagina = 6;
    const [paginaActual, setPaginaActual] = useState(1);

    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productos.slice(indicePrimerProducto, indiceUltimoProducto);

    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [filtro, setFiltro] = useState("")

    const { user, admin } = useAuthContext();

    {
        useEffect(() => {
            obtenerProductos().then((productos) => {
                setCargando(false);
            }).catch((error) => {
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            })

        }, []);
    }

    useEffect(() => {
        filtrarProductos(filtro)
    }, [filtro])

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const cambiarPagina = (numeroPagina) => setPaginaActual(numeroPagina);


    if (cargando) {
        return <p className="carg-prod">Cargando productos...</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <>
                <div className="filtroProd">
                    <input
                        type="text"
                        className="form-control mb-3"
                        id="input-filtro"
                        placeholder="Buscar productos..."
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)}
                    />
                </div>
                <div className="btnAddProd">
                    {admin ? <button className="boton-card-producto btnAggProd"><Link className="linkProd" to="/admin/agregarProductos" >+ Agregar Productos</Link></button> : <></>}
                </div>
                <div className="productos-conteiner">


                    {productosActuales.map((producto) => (
                        <Card
                            producto={producto}
                        />
                    ))
                    }
                </div>

                {/*PAGINADOR*/}
                <div className="d-flex justify-content-center my-4">

                    <button
                        className="boton-card-producto mx-1"
                        id="btn-pag"
                        onClick={() => cambiarPagina(paginaActual - 1)}
                        disabled={paginaActual === 1}
                    >
                        «
                    </button>

                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`boton-card-producto mx-1 ${paginaActual === index + 1 ? "active" : ""}`}
                            id="btn-pag"
                            onClick={() => cambiarPagina(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className="boton-card-producto mx-1"
                        id="btn-pag"
                        onClick={() => cambiarPagina(paginaActual + 1)}
                        disabled={paginaActual === totalPaginas}
                    >
                        »
                    </button>
                </div>

            </>
        )
    }


}

export default ProductosContainer

