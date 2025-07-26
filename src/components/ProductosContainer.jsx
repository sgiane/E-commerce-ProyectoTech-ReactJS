import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useProductosContext } from "../context/ProductosContext";

function ProductosContainer({ functionCarrito }) {
    const { productos, obtenerProductos } = useProductosContext()
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

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


    if (cargando) {
        return <p className="carg-prod">Cargando productos...</p>;
    } else if (error) {
        return <p>{error}</p>;
    } else {
        return (
            <>
                <div className="btnAddProd">
                    {admin ? <button className="boton-card-producto btnAgregarProd"><Link className="navbar-item linkAddProd" to="/admin/agregarProductos" >+ Agregar Productos</Link></button> : <></>}
                </div>
                <div className="productos-conteiner">
                    {productos.map((producto) => (
                        <Card
                            producto={producto}
                        />
                    ))
                    }
                </div>

            </>
        )
    }


}

export default ProductosContainer

