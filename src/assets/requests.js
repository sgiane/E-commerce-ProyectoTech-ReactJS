export const agregarProducto = async (producto) => {
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
};
