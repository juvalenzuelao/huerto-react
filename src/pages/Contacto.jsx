import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/contacto.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
        alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
        
        // Limpiar formulario
        setFormData({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        mensaje: ''
        });
    };

    return (
        <>
        <Navbar />

        <div className="container my-5">
            <div className="row align-items-center shadow-lg rounded overflow-hidden bg-white">
            
            <div className="col-md-6 p-0">
                <img src="/img/contacto.jpg" alt="Huerto Hogar" className="img-fluid contacto" />
            </div>
            
            <div className="col-md-6 p-5">
                <h2 className="mb-4">Contáctanos</h2>
                <p>
                En <strong>HuertoHogar</strong> valoramos la comunicación y siempre estamos disponibles para responder tus dudas. 
                Si tienes consultas, comentarios o sugerencias, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
                
                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                    <input 
                        type="text" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Nombre *" 
                        required 
                    />
                    </div>

                    <div className="col-md-6 mb-3">
                    <input 
                        type="text" 
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Apellido *" 
                        required 
                    />
                    </div>
                </div>
                    
                <div className="row">
                    <div className="col-md-6 mb-3">
                    <input 
                        type="email" 
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Correo *" 
                        required 
                    />
                    </div>
                    <div className="col-md-6 mb-3">
                    <input 
                        type="tel" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Teléfono" 
                    />
                    </div>
                </div>
                
                <div className="mb-3">
                    <textarea 
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="form-control" 
                    rows="4" 
                    placeholder="Mensaje *" 
                    required
                    />
                </div>
                
                <button type="submit" className="btn btn-success px-4 py-2">Enviar</button>
                </form>
            </div>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Contacto;