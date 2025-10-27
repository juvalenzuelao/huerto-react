import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/casos.css';

function CasoSensores() {
    return (
        <>
        <Navbar />
        <div className="caso-detalle">
            <article className="blog-detail">
                <div className="container">
                    <header className="article-header">
                        <div className="article-meta">
                            <span className="blog-tag">Tecnología</span>
                            <span className="blog-tag">IoT</span>
                            <span className="blog-tag">IA</span>
                            <span className="date">2 de Septiembre, 2024</span>
                        </div>
                        <h1>Inteligencia Artificial en el Campo: Sensores IoT</h1>
                        <p className="subtitle">
                            Nuestro revolucionario sistema de sensores IoT en los huertos de Santiago optimiza el uso del agua en un 30%
                        </p>
                    </header>

                    <div className="featured-image">
                        <img 
                            src="/img/blogs/sistemaIot.jpg" 
                            alt="Sistema de sensores IoT en huerto de Santiago" 
                            className="main-image"
                        />
                    </div>

                    <div className="article-content">
                        <section className="intro">
                            <p>
                                La agricultura está viviendo una revolución tecnológica sin precedentes. En nuestro huerto 
                                experimental de Santiago, hemos implementado un <strong>sistema de sensores IoT con inteligencia 
                                artificial</strong> que está transformando la manera de cultivar. Los resultados son impresionantes: 
                                <strong>30% menos consumo de agua</strong> y productos más frescos que nunca.
                            </p>
                            
                            <p>
                                Esta tecnología sostenible monitorea humedad, temperatura y nutrientes en tiempo real, 
                                garantizando que cada planta reciba exactamente lo que necesita, cuando lo necesita. 
                                Es agricultura de precisión al servicio del medio ambiente.
                            </p>
                        </section>

                        <section className="pros-cons">
                            <div className="pros-cons-container">
                                <div className="pros">
                                    <h2>Beneficios del Sistema IoT</h2>
                                    <ul>
                                        <li><strong>Eficiencia hídrica:</strong> 30% menos consumo de agua que métodos tradicionales</li>
                                        <li><strong>Monitoreo 24/7:</strong> Supervisión constante sin intervención humana</li>
                                        <li><strong>Datos precisos:</strong> Decisiones basadas en información real del cultivo</li>
                                        <li><strong>Productos frescos:</strong> Mejor calidad y sabor en frutas y verduras</li>
                                        <li><strong>Sostenibilidad:</strong> Menor impacto ambiental y uso responsable de recursos</li>
                                    </ul>
                                </div>

                                <div className="cons">
                                    <h2>Aspectos a Considerar</h2>
                                    <ul>
                                        <li><strong>Inversión tecnológica:</strong> Costo inicial de sensores y plataforma IoT</li>
                                        <li><strong>Conectividad:</strong> Requiere internet estable en campo</li>
                                        <li><strong>Mantenimiento:</strong> Calibración periódica de sensores</li>
                                        <li><strong>Curva de aprendizaje:</strong> Capacitación en tecnologías digitales</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="articulosRelacionados">
                            <h2>Artículos Relacionados</h2>
                            <div className="grilla">
                                <article className="tarjeta">
                                    <img src="/img/blogs/zanahoriasOrganicas.jpg" alt="Cultivo de zanahorias orgánicas" />
                                    <h3>El Secreto de las Zanahorias Súper Dulces</h3>
                                    <Link to="/blogs/caso-zanahorias" className="leerMas">Leer más</Link>
                                </article>
                                <article className="tarjeta">
                                    <img src="/img/PlatanoCavendish.png" alt="Cultivo hidropónico sustentable" />
                                    <h3>Revolución Hidropónica: Plátanos que Crecen con Menos Agua</h3>
                                    <Link to="/blogs/caso-platano" className="leerMas">Leer más</Link>
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

export default CasoSensores;