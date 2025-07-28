# PROYECTO E-COMMERCE MI DULCE GIANE (REACT JS)

![Logo de la página.](./src/assets/Logo2.png)

## Descripción del Proyecto

Sitio Web E-commerce de ventas de Tortas Caseras (Venezolanas y Argentinas)

### Contenido de Documentación

* Demo
* Breve descripción de las páginas
* Proceso de Creación
* Recursos Útiles
* Instalación
* Autor
* Licencia
* Información Adicional

### Demo

![Demo de la página.](./src/assets/Demo.mp4)

* Inicio

Página principal del Sitio Web con titulo de bienvenida y slider de algunas de las tortas que se encuentran en el sitio.

* Nosotros

Breve descripción del servicio que ofrece Mi Dulce Giane.

* Productos

Página principal de todos los productos que se encuentran en el sitio, desde donde se puede acceder al detalle cada uno de ellos para agregar al carrito, con visualización de una cantidad de productos por página y buscador de productos con un botón de agregar producto si está logueado como admin.


* Contacto

Permite al cliente contactar a los administradores del sitio a través del envío de un mensaje que llega por mail.
También incluye la dirección del local con el mapa de ubicación, así como otras formas de contacto.

* Login

Página para iniciar sesión o registrarse en el sitio, como usuario o administrador. Permite iniciar sesión con email o contraseña, Iniciar sesión con una cuenta de Google o registrarse en caso de no contar con una cuenta.

* Admin

Esta página solo es visible si se está logueado como admin, muestra el listado de productos disponibles con detalles como nombre, precio y stock, con dos botones que permiten editar el producto o eliminarlo. Esta página tambien cuenta con un botón para agregar productos.

* Carrito de Compras

Muestra los productos que el usuario agrega para comprar, permitiendo aumentar o disminuir la cantidad de los productos agregados, eliminar algun producto específico o vaciar el carrito.

### Proceso de Creación

Tecnologías y dependencias utilizadas en el proyecto:

- HTML
- CSS 
- JAVASCRIPT (usado dentro de los componentes de react)
- REACT
- BOOTSTRAP
- REACTSTRAT
- REACT ICONS
- SWEETALERT

Sitio Web creado con REACT JS, implementando extensión JSX en los archivos la cual nos permite escribir código similar a HTML dentro de los archivos de Javascript, de esta manera se crea la estructuración de cada página dentro de los componentes, usando estructura semántica, CSS y Bootstrap para dar estilos al sitio, incluyendo el responsive de las páginas con media queries y algunas otras funcionalidades con Bootstrap. Se aplican sweetalerts para mostrar mensajes al momento del manejo de errores.


### Recursos Útiles

- FIREWORKS - Herramienta de diseño usado para la creación del logo del sitio.
- SNAGIT - Editor usado para imágenes y videos.
- FORMSPREE - Usado para validar el envío del formulario de contacto.
- FIREBASE - Se utilizó para el registro y autenticación de usuarios
- MOCKAPI - Almacenamiento de la data
- NETLIFY - Implementación del Proyecto para 

### Instalación o ejecución

1 Clonar repositorio o descargar archivo .zip
2 Abrir con Editor de código.
3 Abrir terminal y ejecutar el comando npm run dev
4 Acceder el enlace de localhost (CTRL + CLIC o copiar y pegar en el navegador)

* Puede acceder también desde el enlace de Netlify para visualizar el sitio directamente en el navegador

https://mi-dulce-giane.netlify.app/

### Autor

Proyecto realizado por **STEFANY CORTEZ** (sgiane)
TT Adultos - 1C 2025

### Licencia

Proyecto Licenciado por:

### Información Adicional

* Falta agregar algunas validaciones en los formularios, como por ejemplo, en el formulario de contacto no aceptar números para el nombre o apellido, o letras para el número teléfonico.