import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { useProductosContext } from "../context/ProductosContext";

export default function FormularioEditar() {

  const { obtenerProducto, productoEncontrado, editarProducto } = useProductosContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(productoEncontrado);
  const [cargando, setCargando] = useState(null);

  useEffect(() => {

    obtenerProducto(id).then(() => {
      setCargando(false);
    }).catch((error) => {
      if (error == "Producto no encontrado.") {
        setError("Producto no encontrado.")
      }
      if (error == "Hubo un error al obtener el producto.") {
        setError("Hubo un error al obtener el producto.")
      }
      setCargando(false);
    })
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validarForm = validarFormulario();
    if (validarForm == true) {
     await editarProducto(producto).then((prod) => {
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


  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Producto</h2>
      <div>
        <label>Nombre del Producto:</label>
        <input
          type="text"
          name="name"
          value={producto.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>URL de la Imagen:</label>
        <input
          // className="input-addProd"
          type="text"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price || ''}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          // className="input-addProd"
          type="text"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Actualizar Producto</button>
    </form>
  );
}
