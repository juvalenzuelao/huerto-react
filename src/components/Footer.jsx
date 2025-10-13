import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-start">
          
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Huerto Hogar</h5>
          </div>
          
          <div className="col-md-4 mb-3">
            <div className="d-flex flex-wrap">
              <Link to="/nosotros" className="text-primary text-decoration-none me-2">Nosotros</Link>
              <span className="me-2">|</span>
              <Link to="/blogs" className="text-primary text-decoration-none me-2">Blogs</Link>
              <span className="me-2">|</span>
              <Link to="/contacto" className="text-primary text-decoration-none">Contacto</Link>
            </div>
          </div>
          
          <div className="col-md-5 mb-3">
            <p className="mb-2">¡No te pierdas las últimas noticias!</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Ingresa tu email" 
                aria-label="Email" 
              />
              <button className="btn btn-primary" type="button">Suscribirse</button>
            </div>
          </div>
        </div>
      
        <div className="row mt-4">
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <span className="me-3">Métodos de pago:</span>
              <div className="d-flex gap-2">
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fab fa-cc-visa"></i> Visa
                </span>
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fab fa-cc-mastercard"></i> MasterCard
                </span>
                <span className="badge bg-light text-dark px-3 py-2">
                  <i className="fab fa-paypal"></i> PayPal
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <small>© 2024 Huerto Hogar. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;