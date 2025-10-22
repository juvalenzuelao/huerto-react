import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/styleMarlon.css';

function IniciarSesion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        correo: '',
        contrasenna: ''
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar antes de continuar
        if (!formData.correo || !formData.contrasenna) {
            alert('Completa todos los campos');
            return;
        }
        
        // Redirigir según tipo de usuario
        if (formData.correo.includes('admin')) {
            navigate('/admin');  
        } else {
            navigate('/');
        }
    };

    return (
        <>
        <Navbar />

            <div className="form-container divSesion">
                <form className="row g-3" onSubmit={handleSubmit}>
                <img className="logo-Huerto divSesion" src="/img/LogoHuerto.png" alt="Logo" />

                <div className="col-12">
                    <label htmlFor="Correo" className="form-label">Correo electrónico</label>
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
                    <label htmlFor="Contrasenna" className="form-label">Contraseña</label>
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
                    <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    <p><b><Link to="/registrar-sesion">Registrarse</Link></b></p>
                </div>
                </form>
            </div>
        </>
    );
}

export default IniciarSesion;