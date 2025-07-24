import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importa los iconos de react-icons
import "../styles/Admin.css";
import { useProductosContext } from "../context/ProductosContext.jsx";

export default function Admin() {
  const { admin } = useAuthContext();
  const { productos, obtenerProductos } = useProductosContext();

  // const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

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

  // Funciones para editar y eliminar (solo como ejemplo)
  const handleEdit = (id) => {
    console.log("Editar producto con id:", id);
    // Aquí puedes agregar la lógica para redirigir al formulario de edición
  };

  const handleDelete = (id) => {
    console.log("Eliminar producto con id:", id);
    // Aquí puedes agregar la lógica para eliminar el producto
  };

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
                <FaEdit
                  style={{ cursor: "pointer", color: "orange", fontSize: "25px"}}
                  onClick={() => handleEdit(producto.id)}
                />

                {/* Icono de eliminar */}
                <FaTrash
                  style={{ cursor: "pointer", color: "red", fontSize: "25px"}}
                  onClick={() => handleDelete(producto.id)}
                />
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </>
  );
}
