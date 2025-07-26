import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importa los iconos de react-icons
import "../styles/Admin.css";
import { useProductosContext } from "../context/ProductosContext.jsx";
import { dispararSweetBasico } from "../assets/SweetAlert.js";

export default function Admin() {
  const { admin, isVerificando } = useAuthContext();
  const { productos, obtenerProductos, eliminarProducto } = useProductosContext();
  const navigate = useNavigate();
  // const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  function dispararEliminar(id) {
    eliminarProducto(id).then(() => {
      navigate("/admin")
    }).catch((error) => {
      dispararSweetBasico("Hubo un problema al eliminar el producto", error, "error", "Cerrar")
    })
  }

  useEffect(() => {
    obtenerProductos()
      .then((productos) => {
        setCargando(false);
      })
      .catch((error) => {
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (!admin) {
    return <Navigate to="/login" replace />;
  }

  if (cargando) {
    return <p className="carg-prod">Cargando productos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <section className="admin">
        <h1 className="subtitulo">ADMINISTRAR PRODUCTOS</h1>
        <h2 className="subtitulo2">Productos en Stock</h2>

        <div className="btnAddProd">
          {admin ? (
            <button className="btnAgregarProd">
              <Link className="navbar-item linkAddProd"
                to="/admin/agregarProductos">+ Agregar Productos
              </Link>
            </button>
          ) : (
            <></>
          )}
        </div>

        <div className="admin-headers">
          <p>PRODUCTO</p>
          <p>PRECIO</p>
          <p>STOCK</p>
          <p>ACCIONES</p> {/* Columna para los íconos */}
        </div>

        <div className="admin-productos">
          {productos.map((producto) => (
            <div key={producto.id} className="listaProductos">
              <div className="nomProd">
                <p>{producto.name}</p>
              </div>
              <div className="detProd">
                <p>${producto.price}</p>
              </div>
              <div className="detProd">
                <p>{producto.stock}</p>
              </div>

              <div className="detProd">
                {/* Icono de editar */}

                <Link to={`/admin/editar/${producto.id}`}>
                  <FaEdit
                    style={{ cursor: "pointer", color: "orange", fontSize: "25px" }}
                  />
                </Link>

                {/* Icono de eliminar */}


                <FaTrash
                  onClick={() => dispararEliminar(producto.id)}
                  style={{ cursor: "pointer", color: "red", fontSize: "25px" }}
                />

              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
