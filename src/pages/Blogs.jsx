import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/blogs.css';

function Blogs() {
    return (
        <>
        <Navbar />

        <section className="py-5 bg-light">
            <div className="container text-center">
            <h1 className="display-4 fw-bold text-success mb-3">
                <i className="fas fa-seedling me-3"></i>Noticias importantes
            </h1>
            <p className="lead text-muted">Descubre los secretos y datos fascinantes de nuestros cultivos en Chile</p>
            </div>
        </section>
        
        <div className="container mt-5 containerInfo">
            <div className="row align-items-center">
            <div className="col-md-6 infoTienda">
                <div className="blog-meta">
                <span className="blog-tag">Innovación</span>
                <div className="read-time">
                    <i className="fas fa-clock"></i>
                    <span>3 min lectura</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Villarica</span>
                </div>
                </div>
                <h2>Revolución Hidropónica: Plátanos que Crecen con menos cantidad de agua</h2>
                <p className="card-text">
                Descubre cómo la innovación en cultivos hidropónicos de nuestro huerto en Villarica está revolucionando la agricultura local. 
                Los Plátanos Cavendish han mostrado un crecimiento excepcional del <strong>40% más</strong> que los métodos tradicionales, 
                mientras consumen un 60% menos de agua...
                </p>
                <Link to="/blogs/caso-platano" className="btn btn-primary">
                <i className="fas fa-arrow-right me-2"></i>Ver Caso Completo
                </Link>
            </div>
            <div className="col-md-6">
                <img src="/img/PlatanoCavendish.png" alt="Plátano Cavendish hidropónico" className="logoBlog" />
            </div>
            </div>
        </div>

        <div className="container mt-5 containerInfo">
            <div className="row align-items-center container-alternate">
            <div className="col-md-6 infoTienda">
                <div className="blog-meta">
                <span className="blog-tag">Tecnología</span>
                <div className="read-time">
                    <i className="fas fa-clock"></i>
                    <span>4 min lectura</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Santiago</span>
                </div>
                </div>
                <h2>Inteligencia Artificial en el Campo: Sensores IoT</h2>
                <p className="card-text">
                Nuestro revolucionario sistema de sensores IoT en los huertos de Santiago permite un riego de precisión que optimiza 
                el uso del agua en un <strong>30%</strong>. Esta tecnología sostenible monitorea humedad, temperatura y nutrientes en 
                tiempo real, garantizando productos más frescos y menor impacto ambiental...
                </p>
                <Link to="/blogs/caso-sensores" className="btn btn-primary">
                <i className="fas fa-arrow-right me-2"></i>Ver Caso Completo
                </Link>
            </div>
            <div className="col-md-6">
                <img src="/img/blogs/sistemaIot.jpg" alt="Sistema IoT en huertos" className="logoBlog" />
            </div>
            </div>
        </div>

        <div className="container mt-5 containerInfo">
            <div className="row align-items-center">
            <div className="col-md-6 infoTienda">
                <div className="blog-meta">
                <span className="blog-tag">Naturaleza</span>
                <div className="read-time">
                    <i className="fas fa-clock"></i>
                    <span>5 min lectura</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Puerto Montt</span>
                </div>
                </div>
                <h2>El Increíble Viaje de las Abejas: 55,000 km por Kilo de Miel</h2>
                <p className="card-text">
                Las abejas de nuestro huerto en Puerto Montt recorren más de <strong>55,000 kilómetros</strong> (equivalente a dar 
                la vuelta al mundo) para producir un solo kilo de miel orgánica. Esta increíble labor de polinización no solo nos da 
                miel pura, sino que también mejora la calidad y cantidad de nuestros frutales orgánicos en un 35%...
                </p>
                <Link to="/blogs/caso-abejas" className="btn btn-primary">
                <i className="fas fa-arrow-right me-2"></i>Ver Caso Completo
                </Link>
            </div>
            <div className="col-md-6">
                <img src="/img/blogs/abejasMiel.jpg" alt="Abejas trabajando en el huerto" className="logoBlog" />
            </div>
            </div>
        </div>

        <div className="container mt-5 containerInfo">
            <div className="row align-items-center container-alternate">
            <div className="col-md-6 infoTienda">
                <div className="blog-meta">
                <span className="blog-tag">Tradición</span>
                <div className="read-time">
                    <i className="fas fa-clock"></i>
                    <span>3 min lectura</span>
                </div>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Concepción</span>
                </div>
                </div>
                <h2>El Secreto de las Zanahorias Súper Dulces</h2>
                <p className="card-text">
                En nuestros huertos de Concepción, cada zanahoria pasa exactamente <strong>120 días</strong> desarrollando su dulzura 
                natural gracias a la tierra volcánica única de la región. Este proceso artesanal, combinado con técnicas ancestrales 
                mapuches, produce zanahorias 25% más dulces que el promedio nacional y con niveles de betacaroteno excepcionales...
                </p>
                <Link to="/blogs/caso-zanahorias" className="btn btn-primary">
                <i className="fas fa-arrow-right me-2"></i>Ver Caso Completo
                </Link>
            </div>
            <div className="col-md-6">
                <img src="/img/blogs/zanahoriasOrganicas.jpg" alt="Zanahorias orgánicas de Concepción" className="logoBlog" />
            </div>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default Blogs;