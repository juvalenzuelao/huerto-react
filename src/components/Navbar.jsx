import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../app/AuthProvider';
import '../styles/navbar.css';

function Navbar() {
  const { isAuth } = useAuth();
  const adminHref = isAuth ? '/admin' : '/iniciar-sesion?next=/admin';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <div className="logo-Huerto me-3">
          <img
            src="/img/LogoHuerto.png"
            alt="Huerto"
            className="img-fluid rounded"
          />
        </div>

        <NavLink className="navbar-brand title-page" to="/">
          Huerto Hogar
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">
                Contacto
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ofertas">
                Ofertas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={adminHref}>
                Admin
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            {/* Search bar */}
            <div className="search-nav me-4">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control form-control-sm" 
                  placeholder="Buscar..." 
                  aria-label="Buscar"
                />
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            {/* Cart icon */}
            <Link to="/carrito" className="text-dark text-decoration-none">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="ms-2">(0)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;