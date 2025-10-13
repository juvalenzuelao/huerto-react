import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <div className="logo-Huerto me-3">
          <img src="/img/LogoHuerto.png" alt="Huerto" className="img-fluid rounded" />
        </div>
        <Link className="navbar-brand title-page" to="/">Huerto Hogar</Link>
        
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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link to="/carrito" className="text-dark text-decoration-none">
              <i className="fas fa-shopping-cart"></i>
              <span className="ms-2">Prod(0)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;