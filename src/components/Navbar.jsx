import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../app/AuthProvider';

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
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/categorias">Categorías</NavLink>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={(e) => e.preventDefault()}
              >
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/categorias/frutas">Frutas</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/categorias/verduras">Verduras</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/categorias/organicos">Orgánicos</NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">Productos</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ofertas">Ofertas</NavLink>
            </li>

            {/* 👉 Link al panel admin visible siempre */}
            <li className="nav-item">
              <NavLink className="nav-link" to={adminHref}>Admin</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center">
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
