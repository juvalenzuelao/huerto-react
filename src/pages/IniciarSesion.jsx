import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../styles/styleMarlon.css';

function IniciarSesionSimple() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ correo: '', contrasenna: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones simples
    if (!formData.correo || !formData.contrasenna) {
      setError('Completa todos los campos');
      setLoading(false);
      return;
    }

    if (!formData.correo.includes('@')) {
      setError('El correo debe contener @');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://backendreact-kfg2.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const err = await response.text();
        throw new Error(err);
      }

      const data = await response.json();

      // Guardar JWT y datos del usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("rol", data.rol);
      localStorage.setItem("idUsuario", data.id);
      localStorage.setItem("correo", data.correo);

      alert("Inicio de sesión exitoso");

      // redirigir según el rol
      if (data.rol === "ADMIN") {
        navigate("/admin");  
      } else {
        navigate("/Carrito");            
      }

    } catch (err) {
      setError(err.message || "Error al iniciar sesión");
    }

    setLoading(false);
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
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar sesión"}
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
