import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';
import "../styles/login.css"

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true)
  const { login, user} = useAuthContext();
  const navigate = useNavigate();



  // Inicio de sesión con localStorage
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Simulación de autenticación
  //   if (usuario === 'admin' && password === '1234') {
  //     login(usuario);
  //     navigate('/dashboard');
  //   } else {
  //     alert('Credenciales incorrectas');
  //   }
  // };

  //Registro de Usuario
  function registrarUsuario (e) {
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Registro Exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      if(error.code == "auth/invalid-email"){
        dispararSweetBasico("Debe ingresar un email válido", "", "error", "Cerrar")
      }
      if (error.code == "auth/weak-password"){
        dispararSweetBasico("La contraseña debe tener por lo menos 6 dígitos", "", "error", "Cerrar")
      }
      if (error.code == "auth/email-already-in-use"){
        dispararSweetBasico("El email ya existe", "", "error", "Cerrar")
      }

      // alert("Error")
    })
  }

  const handleSubmit2 = (e) =>{
    logout()
  }

  //Inicio de sesión con usuarios en Firebase
  function iniciaSesionEmailPass (e){
    e.preventDefault();
    loginEmailPass(usuario, password).then(() => {
      login(usuario)
      dispararSweetBasico("Inicio de Sesión Exitoso", "", "success", "Confirmar")

      // Redirigir según el rol
      if (usuario === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/productos");
      }

    }).catch((error) => {
      if(error.code == "auth/invalid-email" || error.code == "auth/invalid-credential"){
        dispararSweetBasico("Email o Contraseña incorrectos", "", "error", "Cerrar")
      }
      // alert("Error")
    })
   }

function handleShow (e) {
  e.preventDefault();
  setShow(!show)
}

  // if (user){
  //   return(
  //       <form onSubmit={handleSubmit2}>
  //           <button type='submit'>Cerrar sesión</button>
  //       </form>
  //   )
  // }

  if (!user && show){
    return (
      <div>

    {/* Formulario de Inicio de sesión */}
    <form className='form-admin' onSubmit={iniciaSesionEmailPass}>
      <h2 className="subtitulo">Iniciar sesión con Email y Contraseña</h2>

      <div className='form'>
      
        <label className="label-admin">Email:</label>
        <input className="input-admin"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      
      
        <label className="label-admin">Contraseña:</label>
        <input className="input-admin"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      </div>
      <button className='btn-login' type="submit">Iniciar sesión</button>
    </form>
    <button className='btn-login' onClick={handleShow}>Registrarse</button>
    </div>
    )
  }

  if (!show && !show){
    return(
      <div>

        {/* Formulario de Registro */}
    <form className='form-admin' onSubmit={registrarUsuario}>
      <h2 className="subtitulo">Registrarse</h2>
       <div className="form">
            <label className="label-admin">Email:</label>
            <input
              className="input-admin"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <label className="label-admin">Contraseña:</label>
            <input
              className="input-admin"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
      <button className='btn-login' type="submit">Registrarse</button>
    </form>
    <button className='btn-login' onClick={handleShow}>Iniciar Sesión</button>
    </div>
    
    )
  }

  //Formulario de Inicio de Sesion con usuario y contraseña (localStorage)

  // return (
  //   <div>

  //   <form onSubmit={handleSubmit}>
  //     <h2>Iniciar sesión</h2>
  //     <div>
  //       <label>Usuario:</label>
  //       <input
  //         type="text"
  //         value={usuario}
  //         onChange={(e) => setUsuario(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label>Contraseña:</label>
  //       <input
  //         type="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //     </div>
  //     <button type="submit">Iniciar sesión</button>
  //   </form>

  //   </div>
  // );
}
export default Login;
