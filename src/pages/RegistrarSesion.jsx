import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/styleMarlon.css';

function RegistrarSesion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombres: '',
        rut: '',
        apellidos: '',
        correo: '',
        contrasenna: '',
        repetirContrasenna: '',
        direccion: '',
        region: '',
        comuna: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valido = true;

        if (!formData.nombres || formData.nombres.trim() === "" || formData.nombres.length > 50) {
            alert("El nombre es obligatorio y debe tener máximo 50 caracteres.");
            valido = false;
            return;
        }

        const rutRegex = /^[0-9]{7,8}-?[0-9Kk]{1}$/;
        if (!formData.rut || !rutRegex.test(formData.rut.trim())) {
            alert("El RUT no es válido. Ejemplo: 19011022K");
            valido = false;
            return;
        }

        if (!formData.apellidos || formData.apellidos.trim() === "" || formData.apellidos.length > 100) {
            alert("Los apellidos son obligatorios y deben tener máximo 100 caracteres.");
            valido = false;
            return;
        }

        const correoRegex = /^[\w\.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!formData.correo || !correoRegex.test(formData.correo.trim()) || formData.correo.length > 100) {
            alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com y tener máximo 100 caracteres.");
            valido = false;
            return;
        }

        if (!formData.contrasenna || !formData.repetirContrasenna || formData.contrasenna.trim() === "" || formData.repetirContrasenna.trim() === "") {
            alert("La contraseña es obligatoria.");
            valido = false;
            return;
        }

        if (formData.contrasenna !== formData.repetirContrasenna) {
            alert("Las contraseñas no coinciden.");
            valido = false;
            return;
        }

        if (!formData.direccion || formData.direccion.trim() === "" || formData.direccion.length > 300) {
            alert("La dirección es obligatoria y debe tener máximo 300 caracteres.");
            valido = false;
            return;
        }

        if (!formData.region || formData.region === "") {
            alert("Debe seleccionar una región.");
            valido = false;
            return;
        }

        if (!formData.comuna || formData.comuna === "") {
            alert("Debe seleccionar una comuna.");
            valido = false;
            return;
        }

        if (valido) {
            alert("Formulario válido. Usuario registrado exitosamente.");
            console.log('Datos del registro:', formData);
            navigate('/iniciar-sesion');
        }
    };

    return (
        <>
            <Navbar />

            <div className="form-container divSesion">
                <form className="row g-3" onSubmit={handleSubmit}>
                    <img className="logo-Huerto divSesion" src="/img/LogoHuerto.png" alt="Logo" />

                    <div className="col-12">
                        <label htmlFor="Nombres" className="form-label">Nombres</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Nombres"
                            name="nombres"
                            value={formData.nombres}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="Rut" className="form-label">Rut</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Rut"
                            name="rut"
                            value={formData.rut}
                            onChange={handleChange}
                            placeholder="Ej: 19011022K"
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Apellidos"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                        />
                    </div>

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
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="RepetirContrasenna" className="form-label">Confirmar contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="RepetirContrasenna"
                            name="repetirContrasenna"
                            value={formData.repetirContrasenna}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="Direccion" className="form-label">Dirección</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Direccion"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputRegion" className="form-label">Región</label>
                        <select
                            id="inputRegion"
                            className="form-select"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                        >
                            <option value="">-- Selecciona la región --</option>
                            <option value="metropolitana">Región Metropolitana de Santiago</option>
                            <option value="araucania">Región de la Araucanía</option>
                            <option value="nuble">Región de Ñuble</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputComuna" className="form-label">Comuna</label>
                        <select
                            id="inputComuna"
                            className="form-select"
                            name="comuna"
                            value={formData.comuna}
                            onChange={handleChange}
                        >
                            <option value="">-- Selecciona la comuna --</option>
                            <option value="linares">Linares</option>
                            <option value="longavi">Longaví</option>
                            <option value="concepcion">Concepción</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                        <p className="mt-2"><b>¿Ya tienes cuenta? <Link to="/iniciar-sesion">Inicia sesión</Link></b></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default RegistrarSesion;