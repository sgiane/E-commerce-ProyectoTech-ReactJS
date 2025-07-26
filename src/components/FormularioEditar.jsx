import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { useProductosContext } from "../context/ProductosContext";
import "../styles/FormularioProd.css"
// import { useAuthContext } from "../context/AuthContext";

function FormularioEditar({}) {

  const { obtenerProducto, editarProducto } = useProductosContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {

    obtenerProducto(id).then((prod) => {
      setProducto(prod);
      setCargando(false);
    }).catch((error) => {
      setError(error);
      setCargando(false);
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  
  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return "El nombre es obligatorio.";
    }
    if (!producto.price || producto.price <= 0) {
      return "El precio debe ser mayor a 0.";
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      return "La descripción debe tener al menos 10 caracteres.";
    }
    if (!producto.imagen.trim()) {
      return "La URL de la imagen no debe estar vacía"
    }
    if (!producto.stock.trim()) {
      return "Agrega la cantidad de productos";
    }
    else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario();
    if (validarForm == true) {
     editarProducto(producto).then(() => {
        dispararSweetBasico("Producto Actualizado correctamente", "", "success", "Aceptar")
        navigate ("/admin");
      }).catch((error) => {
        dispararSweetBasico("Hubo un problema al actualizar el producto.", error, "error", "Confirmar");
      })
    }  else {
          dispararSweetBasico(
            "Error al cargar el producto",
            validarForm,
            "Error",
            "Cerrar"
          );
        }
  };


  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <form className="formProd" onSubmit={handleSubmit}>
      <h2 className="subtitulo">Editar Producto</h2>
      <div>
        <label className="label-addProd">Nombre del Producto:</label>
        <input
        className="input-addProd"
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label-addProd">URL de la Imagen:</label>
        <input
        className="input-addProd"
          // className="input-addProd"
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label-addProd">Precio:</label>
        <input
        className="input-addProd"
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label className="label-addProd">Descripción:</label>
        <textarea
        className="input-addProd"
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="label-addProd">Cantidad:</label>
        <input
        className="input-addProd"
          type="text"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
          required
        />
      </div>
      <button className="botonFormProductos" type="submit">Actualizar Producto</button>
    </form>
  );
}

export default FormularioEditar