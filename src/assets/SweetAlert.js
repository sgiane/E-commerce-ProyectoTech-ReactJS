import Swal from 'sweetalert2'

export function dispararSweetBasico(titulo, text, icon, textoBoton) {
    Swal.fire({
        title: titulo,
        text: text,
        icon: icon,
        confirmButtonText: textoBoton
      })
}

export function dispararSweetBasico2(titulo, texto, icono, textoBoton = "Aceptar", mostrarCancelar = false) {
  return Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    showCancelButton: mostrarCancelar,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: textoBoton,
    cancelButtonText: 'Cancelar'
  });
}