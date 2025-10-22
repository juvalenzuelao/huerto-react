import { Link } from 'react-router-dom';
import '../../styles/estilo.css';

function HomeAdmin() {
    return (
    <div className="layout">
        <aside className="sidebar">
        <div className="sidebar-brand">
            <img className="brand-logo" src="/img/LogoHuerto.png" alt="HuertoHogar" />
        </div>

        <nav className="sidebar-nav">
            <Link to="/admin" className="sidebar-link active" aria-current="page">
            <i className="bi bi-speedometer2"></i>
            <span>Inicio</span>
            </Link>
            <Link to="/admin/usuarios" className="sidebar-link">
            <i className="bi bi-bag-check"></i>
            <span>Usuarios</span>
            </Link>
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
            <Link to="/" className="sidebar-link muted">
            <i className="bi bi-power"></i>
            <span>Salir</span>
            </Link>
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