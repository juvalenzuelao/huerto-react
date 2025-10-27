import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../styles/adminSideBar.css';

function AdminSideBar() {
    const nav = useNavigate();

    const salir = () => {
        alert('Sesión cerrada');
        nav('/');
    };

    return (
        <aside className="sidebar">
        <div className="sidebar-brand">
            <img className="brand-logo" src="/img/LogoHuerto.png" alt="HuertoHogar" />
        </div>

        <nav className="sidebar-nav">
            <NavLink to="/admin" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`} end>
            <i className="bi bi-speedometer2"></i>
            <span>Inicio</span>
            </NavLink>

            <NavLink to="/admin/productos" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-box-seam"></i>
            <span>Productos</span>
            </NavLink>

            <NavLink to="/admin/usuarios" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-people"></i>
            <span>Usuarios</span>
            </NavLink>

            <NavLink to="/admin/ordenes" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <i className="bi bi-receipt"></i>
            <span>Órdenes</span>
            </NavLink>

            <NavLink to="/admin/categorias" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-tags"></i>
                <span>Categoría</span>
            </NavLink>

            <NavLink to="/admin/perfil" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <i className="bi bi-tags"></i>
                <span>Perfil</span>
            </NavLink>

        </nav>

        <div className="sidebar-bottom">
            <Link to="/" className="sidebar-link muted">
            <i className="bi bi-bag"></i>
            <span>Ir a Tienda</span>
            </Link>
            <button 
            type="button" 
            className="sidebar-link muted" 
            onClick={salir}
            >
            <i className="bi bi-power"></i>
            <span>Salir</span>
            </button>
            <div className="copyright small">© 2025</div>
        </div>
        </aside>
    );
}

export default AdminSideBar;