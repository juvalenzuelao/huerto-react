import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/styleMarlon.css';

function IniciarSesionSimple() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: '', contrasenna: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validación 1: Campos vacíos
    if (!formData.correo || !formData.contrasenna) {
      setError('Completa todos los campos');
      return;
    }

    // Validación 2: Correo debe contener @
    if (!formData.correo.includes('@')) {
      setError('El correo debe contener @');
      return;
    }

    // Si todo está bien, redirigir a Main
    alert('Login exitoso');
    navigate('/');
  };

  return (
    <div className="form-container divSesion">
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
          />
        </div>

        {error && (
          <div className="col-12">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        )}

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
  );
}

export default IniciarSesionSimple;