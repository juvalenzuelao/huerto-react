import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './app/AuthProvider';

// Páginas públicas
import Main from './pages/Main';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';
import RegistrarSesion from './pages/RegistrarSesion';
import Categorias from './pages/Categorias';
import DetalleNaranja from './pages/detalleProducto/DetalleNaranja';
import Ofertas from './pages/Ofertas';
// Compra
import Carrito from './pages/Carrito';
import DetalleCompra from './pages/DetalleCompra';
import CompraExitosa from './pages/CompraExitosa';
import CompraCancelada from './pages/CompraCancelada';
//Blogs
import CasoPlatano from './pages/casos/CasoPlatano';
import CasoSensores from './pages/casos/CasoSensores';

// Páginas admin
import HomeAdmin from './pages/admin/HomeAdmin';
import ProductosAdmin from './pages/admin/ProductosAdmin';
import Ordenes from './pages/admin/Ordenes';
import UsuariosAdmin from './pages/admin/UsuariosAdmin';
import Boleta001 from './pages/admin/boletas/boleta001';
import CategoriasAdmin from './pages/admin/Categorias';
import Perfil from './pages/admin/Perfil';

// Guard de ruta privada
function RutaPrivada({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/iniciar-sesion" replace />;
}

export default function App() {
  return (
    <Routes>
      {/* Públicas */}
      <Route path="/" element={<Main />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/productos/naranja" element={<DetalleNaranja />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/detallecompra" element={<DetalleCompra />} />
      <Route path="/compraexitosa" element={<CompraExitosa/>} />
      <Route path="/compracancelada" element={<CompraCancelada />} />
      <Route path="/casos/CasoPlatano" element={<CasoPlatano />} />
      <Route path="/casos/CasoSensores" element={<CasoSensores />} />

      {/* Auth */}
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      <Route path="/registrar-sesion" element={<RegistrarSesion />} />

      // Admin
      <Route path="/admin" element={<RutaPrivada><HomeAdmin /></RutaPrivada>} />
      <Route path="/admin/productos" element={<RutaPrivada><ProductosAdmin /></RutaPrivada>} />
      <Route path="/admin/usuarios" element={<RutaPrivada><UsuariosAdmin /></RutaPrivada>} />
      <Route path="/admin/ordenes" element={<RutaPrivada><Ordenes /></RutaPrivada>} />
      <Route path="/admin/boletas/boleta001" element={<RutaPrivada><Boleta001 /></RutaPrivada>} />
      <Route path="/admin/categorias" element={<RutaPrivada><CategoriasAdmin /></RutaPrivada>} />
      <Route path="/admin/perfil" element={<RutaPrivada><Perfil /></RutaPrivada>} />
      
      

      {/* Catch-all (al final) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}