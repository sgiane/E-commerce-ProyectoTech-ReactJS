import React, { useState } from "react";
import { dispararSweetBasico } from "../assets/SweetAlert";
import { data, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import "../styles/FormularioProd.css";
import { useProductosContext } from "../context/ProductosContext";

function FormularioProducto({}) {
      const {agregarProducto} = useProductosContext();
      const {admin} = useAuthContext();

  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    imagen:"",
    stock: "",
  });

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
    if (!producto.imagen.trim()){
      return "La URL de la imagen no debe estar vacía"
    }
    if (!producto.stock.trim()) {
      return "Agrega la cantidad de productos";
    }
    else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario();
    if (validarForm == true) {
      agregarProducto(producto).then((data) => {
      setProducto({ name: "", price: "", description: "", imagen: "", stock: ""});
      }).catch((error) =>{
        dispararSweetBasico("Hubo un problema al agregar el producto.", error, "error", "Cerrar")
      })

    } else {
      dispararSweetBasico(
        "Error al cargar el producto",
        validarForm,
        "Error",
        "Cerrar"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(producto); // Llamada a la función para agregar el producto
    setProducto({ name: "", price: "", description: "" }); // Limpiar el formulario
  };

    if(!admin){
        return(
            <Navigate to="/login" replace/>
        )
    }

  return (
    <form className="formAddProd" onSubmit={handleSubmit2}>
      <h2 className="subtitulo">Agregar Producto</h2>
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
          type="text"
          name="imagen"
          value={producto.imagen}
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
          rows={4}
          className="descProductos"
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <button className="botonFormProductos" type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
