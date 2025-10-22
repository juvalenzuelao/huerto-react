import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';
import RegistrarSesion from './pages/RegistrarSesion';
import HomeAdmin from './pages/admin/HomeAdmin';
import DetalleNaranja from './pages/detalleProducto/DetalleNaranja';
import Categorias from './pages/Categorias';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<Productos />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/contacto" element={<Contacto />}/>   
        <Route path="/iniciar-sesion" element={<IniciarSesion />}/>  
        <Route path="/registrar-sesion" element={<RegistrarSesion />}/>
        <Route path="/admin" element={<HomeAdmin />}/>
        <Route path="/productos/naranja" element={<DetalleNaranja />}/>
        <Route path="/categorias" element={<Categorias />}/>
        {/* Aquí agregarás las otras rutas después */}
      </Routes>
    </Router>
  );
}

export default App;