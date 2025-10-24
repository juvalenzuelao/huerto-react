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

// Páginas admin
import HomeAdmin from './pages/admin/HomeAdmin';
import AdminProductos from './pages/admin/AdminProductos';
import AdminUsuarios from './pages/admin/AdminUsuarios';

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
      <Route path="/productos/naranja" element={<DetalleNaranja />} />

      {/* Auth */}
      <Route path="/iniciar-sesion" element={<IniciarSesion />} />
      <Route path="/registrar-sesion" element={<RegistrarSesion />} />

      {/* Admin protegido */}
      <Route path="/admin" element={<RutaPrivada><HomeAdmin /></RutaPrivada>} />
      <Route path="/admin/productos" element={<RutaPrivada><AdminProductos /></RutaPrivada>} />
      <Route path="/admin/usuarios" element={<RutaPrivada><AdminUsuarios /></RutaPrivada>} />
      {/* Reusan la misma vista para no 404 en el menú */}
      <Route path="/admin/nuevo-usuario" element={<RutaPrivada><AdminUsuarios /></RutaPrivada>} />
      <Route path="/admin/editar-usuario" element={<RutaPrivada><AdminUsuarios /></RutaPrivada>} />

      {/* Catch-all (al final) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}