import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/casos.css';

function CasoPlatano() {
    return (
        <>
        <Navbar />
        <div className="caso-detalle">
            <article className="blog-detail">
                <div className="container">
                <header className="article-header">
                    <div className="article-meta">
                    <span className="blog-tag">Innovación</span>
                    <span className="blog-tag">Hidroponía</span>
                    <span className="date">15 de Agosto, 2024</span>
                    </div>
                    <h1>Revolución Hidropónica: Plátanos que Crecen con Menos Agua</h1>
                    <p className="subtitle">
                    Nuestro huerto en Villarica logra un crecimiento 40% superior con 60% menos consumo de agua
                    </p>
                </header>

                <div className="featured-image">
                    <img 
                    src="/img/PlatanoCavendish.png" 
                    alt="Cultivo hidropónico de plátanos en Villarica" 
                    className="main-image"
                    />
                </div>

                <div className="article-content">
                    <section className="intro">
                    <p>
                        Hace seis meses iniciamos un proyecto experimental en nuestro huerto de Villarica que 
                        prometía cambiar la forma en que cultivamos plátanos. Los resultados han superado 
                        todas nuestras expectativas: los <strong>Plátanos Cavendish cultivados hidropónicamente</strong> 
                        han mostrado un crecimiento excepcional del <strong>40% más</strong> que los métodos 
                        tradicionales, mientras consumen un <strong>60% menos de agua</strong>.
                    </p>
                    
                    <p>
                        Esta innovación no solo representa un avance significativo para nuestra producción 
                        local, sino que podría ser la solución que la agricultura chilena necesita ante 
                        los desafíos del cambio climático y la escasez hídrica.
                    </p>
                    </section>

                    <section className="pros-cons">
                    <div className="pros-cons-container">
                        <div className="pros">
                        <h2>Ventajas del Sistema</h2>
                        <ul>
                            <li><strong>Ahorro de agua:</strong> 60% menos consumo hídrico que métodos tradicionales</li>
                            <li><strong>Mayor productividad:</strong> 40% más de crecimiento y rendimiento</li>
                            <li><strong>Control total:</strong> Condiciones optimizadas sin depender del clima</li>
                            <li><strong>Calidad superior:</strong> Frutos más uniformes y sabrosos</li>
                        </ul>
                        </div>

                        <div className="cons">
                        <h2>Desafíos a Considerar</h2>
                        <ul>
                            <li><strong>Inversión inicial alta:</strong> Equipos y sistema de control automatizado</li>
                            <li><strong>Consumo energético:</strong> Bombas y sistemas de control requieren electricidad</li>
                            <li><strong>Conocimiento técnico:</strong> Necesita capacitación especializada</li>
                        </ul>
                        </div>
                    </div>
                    </section>

                    <section className="articulosRelacionados">
                    <h2>Artículos Relacionados</h2>
                    <div className="grilla">
                        <article className="tarjeta">
                        <img src="/img/blogs/zanahoriasOrganicas.jpg" alt="Zanahorias orgánicas" />
                        <h3>El Secreto de las Zanahorias Súper Dulces</h3>
                        <Link to="/blogs/caso-zanahorias" className="leerMas">Leer más</Link>
                        </article>
                        <article className="tarjeta">
                        <img src="/img/blogs/sistemaIot.jpg" alt="Sistema IoT" />
                        <h3>Inteligencia Artificial en el Campo: Sensores IoT</h3>
                        <Link to="/blogs/caso-sensores" className="leerMas">Leer más</Link>
                        </article>
                    </div>
                    </section>
                </div>
                </div>
            </article>
        </div>
        <Footer />
        </>
    );
}

export default CasoPlatano;