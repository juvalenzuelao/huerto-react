import { useState } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/perfil.css';

function Perfil() {
    const [nombre, setNombre] = useState('Juan Pérez');
    const [email, setEmail] = useState('juan@example.com');
    const [telefono, setTelefono] = useState('123456789');
    const [direccion, setDireccion] = useState('Calle Falsa 123');
    const [contraseña, setContraseña] = useState('');

    const handleGuardar = () => {
        alert('Cambios guardados correctamente');
        setContraseña('');
    };

    return (
        <div className="perfil-dashboard">
            <AdminSideBar />
            <div className="perfil-content">
                <div className="perfil-container">
                    <i className="bi bi-person-circle perfil-icono"></i>
                    <h2>{nombre}</h2>
                    <p>{email}</p>

                    <div className="perfil-campos">
                        <div className="perfil-campo">
                            <label>Teléfono</label>
                            <input 
                                type="text" 
                                value={telefono} 
                                onChange={(e) => setTelefono(e.target.value)} 
                            />
                        </div>

                        <div className="perfil-campo">
                            <label>Dirección</label>
                            <input 
                                type="text" 
                                value={direccion} 
                                onChange={(e) => setDireccion(e.target.value)} 
                            />
                        </div>

                        <div className="perfil-campo">
                            <label>Contraseña</label>
                            <input 
                                type="password" 
                                placeholder="Nueva contraseña"
                                value={contraseña} 
                                onChange={(e) => setContraseña(e.target.value)} 
                            />
                        </div>

                        <button className="perfil-boton" onClick={handleGuardar}>
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
