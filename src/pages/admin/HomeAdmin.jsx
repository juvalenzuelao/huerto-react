import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/AuthProvider';
import '../../styles/estilo.css';
import '../../styles/admin.css';

function HomeAdmin() {
  const { logout } = useAuth();
  const nav = useNavigate();

  const salir = (e) => {
    e.preventDefault();
    logout();      // borra token en localStorage
    nav('/');      // o '/iniciar-sesion' si prefieres volver al login
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <img className="brand-logo" src="/img/LogoHuerto.png" alt="HuertoHogar" />
        </div>

        <nav className="sidebar-nav">
            <NavLink to="/admin" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-speedometer2"></i>
                <span>Inicio</span>
            </NavLink>

          <NavLink to="/admin/productos" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-box-seam"></i>
            <span>Productos</span>
          </NavLink>

          <NavLink to="/admin/usuarios" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-bag-check"></i>
            <span>Usuarios</span>
          </NavLink>

          <Link to="/admin/nuevo-usuario" className="sidebar-link">
            <i className="bi bi-box-seam"></i>
            <span>Nuevo usuario</span>
          </Link>

          <Link to="/admin/editar-usuario" className="sidebar-link">
            <i className="bi bi-pen"></i>
            <span>Editar usuario</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <Link to="/" className="sidebar-link muted">
            <i className="bi bi-bag"></i>
            <span>Ir a Tienda</span>
          </Link>
          <button type="button" className="sidebar-link muted" onClick={salir} style={{background:'none', border:'0', padding:0}}>
            <i className="bi bi-power"></i>
            <span>Salir</span>
          </button>
          <div className="copyright small">© 2025</div>
        </div>
      </aside>

      <main className="content">
        <div className="page-header d-flex align-items-center justify-content-between">
          <h1 className="h5 m-0">¡Hola, Administrador!</h1>
          <i className="bi bi-bell"></i>
        </div>

        <section className="dashboard-area mt-3">
          <div className="panel top"></div>
          <div className="panel bottom"></div>
        </section>
      </main>
    </div>
  );
}

export default HomeAdmin;
