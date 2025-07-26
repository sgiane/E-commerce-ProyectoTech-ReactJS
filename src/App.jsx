import { useEffect, useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import ProductosContainer from './components/ProductosContainer';
import Carrito from './components/Carrito';
import About from './components/About';
import Contacto from './components/Contacto';
import ProductoDetalle from './components/ProductoDetalle';
import Admin from './components/Admin';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav2 from './components/Nav2';
import FormularioProducto from './components/FormularioProductos';
import FormularioEditar from './components/FormularioEditar';
import { useAuthContext } from './context/AuthContext';


function App() {

  const {verificacionLog} = useAuthContext();

  useEffect(() => {
    verificacionLog()
  }, [])

  return (
    <Router>
      <div>
        <Header/>
      </div>
      <div className='navbar'>
        {/* <Nav productosCarrito={productosCarrito} /> */}
        <Nav2 />
      </div>
      <div className='pages-conteiner'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/login' element={<Login user={usuarioLogeado} admin={adminLogeado} setLogeadoAdmin={manejarAdmin} setLogeadoUser={manejarUser} />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos/:id" element={<ProductoDetalle/>} />
          <Route path='/admin' element={<Admin /> } />
          <Route path='/admin/agregarProductos' element={<FormularioProducto/>}/>
          <Route path='/admin/editar/:id' element={<FormularioEditar/>}/>

        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;