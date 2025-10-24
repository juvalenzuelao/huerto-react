import { NavLink, Link } from 'react-router-dom';
import '../styles/estilo.css';

export default function AdminMarco({ children, titulo = 'Administración' }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <img className="brand-logo" src="/img/LogoHuerto.png" alt="HuertoHogar" />
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/admin"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <i className="bi bi-speedometer2"></i><span>Inicio</span>
          </NavLink>

          <NavLink
            to="/admin/productos"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <i className="bi bi-box-seam"></i><span>Productos</span>
          </NavLink>

          <NavLink
            to="/admin/usuarios"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <i className="bi bi-bag-check"></i><span>Usuarios</span>
          </NavLink>

          {/* En el futuro puedes reusar la misma vista con query params */}
          <Link to="/admin/nuevo-usuario" className="sidebar-link">
            <i className="bi bi-box-seam"></i><span>Nuevo usuario</span>
          </Link>
          <Link to="/admin/editar-usuario" className="sidebar-link">
            <i className="bi bi-pen"></i><span>Editar usuario</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <Link to="/" className="sidebar-link muted">
            <i className="bi bi-bag"></i><span>Ir a Tienda</span>
          </Link>
          {/* Si quieres botón "Salir" global, lo podemos agregar aquí luego */}
        </div>
      </aside>

      <main className="content">
        <div className="page-header d-flex align-items-center justify-content-between">
          <h1 className="h5 m-0">{titulo}</h1>
          <i className="bi bi-bell"></i>
        </div>

        <section className="dashboard-area mt-3">
          {children}
        </section>
      </main>
    </div>
  );
}
