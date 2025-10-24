import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../app/AuthProvider';
import Navbar from '../components/Navbar';
import '../styles/styleMarlon.css';

function IniciarSesion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // lee el parámetro next (?next=/admin)
  const params = new URLSearchParams(location.search);
  const nextParam = params.get('next');

  const [formData, setFormData] = useState({ correo: '', contrasenna: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.correo || !formData.contrasenna) {
      alert('Completa todos los campos');
      return;
    }

    const { ok, error } = await login({
      email: formData.correo,
      password: formData.contrasenna
    });

    if (!ok) {
      alert(error || 'Credenciales inválidas');
      return;
    }

    // 1) si viene ?next, úsalo
    // 2) si el correo contiene 'admin', manda al dashboard
    // 3) si no, home
    const destino =
      nextParam || (formData.correo.includes('admin') ? '/admin' : '/');

    navigate(destino);
  };

  return (
    <>
      <Navbar />

      <div className="form-container divSesion">
        {/* aviso pequeño si vienes al panel admin */}
        {nextParam === '/admin' && (
          <div className="alert alert-success" role="alert">
            Acceso al <b>Panel de Administración</b>
          </div>
        )}

        <form className="row g-3" onSubmit={handleSubmit}>
          <img
            className="logo-Huerto divSesion"
            src="/img/LogoHuerto.png"
            alt="Logo"
          />

          <div className="col-12">
            <label htmlFor="Correo" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="Correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="ejemplo@duoc.cl"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="Contrasenna" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="Contrasenna"
              name="contrasenna"
              value={formData.contrasenna}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesión
            </button>
            <p>
              <b>
                <Link to="/registrar-sesion">Registrarse</Link>
              </b>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default IniciarSesion;
