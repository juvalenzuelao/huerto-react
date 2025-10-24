import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);
  const year = new Date().getFullYear();

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    // Guarda “suscripciones” localmente solo para demo
    const KEY = 'hh_newsletter';
    try {
      const lista = JSON.parse(localStorage.getItem(KEY) || '[]');
      if (!lista.includes(email)) lista.push(email);
      localStorage.setItem(KEY, JSON.stringify(lista));
      setOk(true);
      setEmail('');
      setTimeout(() => setOk(false), 3000);
    } catch {
      // silencioso: en demo no necesitamos manejar errores
    }
  };

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-3 mb-3">
            <h5 className="mb-3">Huerto Hogar</h5>
          </div>

          <div className="col-md-4 mb-3">
            <div className="d-flex flex-wrap align-items-center">
              <Link to="/nosotros" className="text-info text-decoration-none me-2 fw-semibold">Nosotros</Link>
              <span className="me-2">|</span>
              <Link to="/blogs" className="text-info text-decoration-none me-2 fw-semibold">Blogs</Link>
              <span className="me-2">|</span>
              <Link to="/contacto" className="text-info text-decoration-none fw-semibold">Contacto</Link>
            </div>
          </div>

          <div className="col-md-5 mb-3">
            <p className="mb-2">¡No te pierdas las últimas noticias!</p>
            <form className="input-group" onSubmit={onSubscribe} noValidate>
              <label htmlFor="footerEmail" className="visually-hidden">Correo electrónico</label>
              <input
                id="footerEmail"
                name="email"
                type="email"
                className="form-control"
                placeholder="Ingresa tu email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">Suscribirse</button>
            </form>
            {ok && <small className="text-success d-block mt-2">¡Suscripción registrada!</small>}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-7">
            <div className="d-flex align-items-center">
              <span className="me-3">Métodos de pago:</span>
              <div className="d-flex gap-2 flex-wrap">
                <span className="badge bg-light text-dark px-3 py-2 d-flex align-items-center gap-2">
                  <i className="fa-brands fa-cc-visa" aria-hidden="true"></i> <span>Visa</span>
                </span>
                <span className="badge bg-light text-dark px-3 py-2 d-flex align-items-center gap-2">
                  <i className="fa-brands fa-cc-mastercard" aria-hidden="true"></i> <span>MasterCard</span>
                </span>
                <span className="badge bg-light text-dark px-3 py-2 d-flex align-items-center gap-2">
                  <i className="fa-brands fa-paypal" aria-hidden="true"></i> <span>PayPal</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="row">
          <div className="col-12 text-center">
            <small>© {year} Huerto Hogar. Todos los derechos reservados.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
