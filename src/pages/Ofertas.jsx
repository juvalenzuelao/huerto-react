import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styleMarlon.css';

function Ofertas() {
    return (
        <>
            <Navbar />

            <div className="container text-center tamannoGrid">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="titulo-productos"> Ofertas Huerto Hogar !!</h1>
                        <p className="text-muted">Aprovecha descuentos por tiempo limitado en tus productos favoritos</p>
                    </div>

                    {/* Tarjeta 1 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/naranja">
                            <div className="card oferta-card">
                                <img src="/img/NaranjaValencia.jpg" className="card-img-top imgGrid" alt="Naranja Valencia" />
                                <div className="card-body">
                                    <p className="card-text text-start">FR002 Naranja Valencia</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$2.000</s></p>
                                        <p className="fw-bold text-success">$1.000 x KG</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/miel">
                            <div className="card oferta-card">
                                <img src="/img/MielOrganica.jpg" className="card-img-top imgGrid" alt="Miel Orgánica" />
                                <div className="card-body">
                                    <p className="card-text text-start">PO001 Miel Orgánica</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$5.000</s></p>
                                        <p className="fw-bold text-success">$2.500 x 500GR</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/manzana">
                            <div className="card oferta-card">
                                <img src="/img/ManzanasFuji.jpg" className="card-img-top imgGrid" alt="Manzana Fuji" />
                                <div className="card-body">
                                    <p className="card-text text-start">FR001 Manzana Fuji</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$1.500</s></p>
                                        <p className="fw-bold text-success">$900 x KG</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/zanahoria">
                            <div className="card oferta-card">
                                <img src="/img/ZanahoriasOrganicas.png" className="card-img-top imgGrid" alt="Zanahorias" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR001 Zanahorias</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$1.200</s></p>
                                        <p className="fw-bold text-success">$600 x KG</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Tarjeta 5 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/pimiento">
                            <div className="card oferta-card">
                                <img src="/img/PimientosTricolores.jpg" className="card-img-top imgGrid" alt="Pimientos Tricolores" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR003 Pimientos Tricolores</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$1.800</s></p>
                                        <p className="fw-bold text-success">$1.000 x KG</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Tarjeta 6 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/ofertas/espinaca">
                            <div className="card oferta-card">
                                <img src="/img/EspinacasFrescas.jpg" className="card-img-top imgGrid" alt="Espinacas Frescas" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR002 Espinacas Frescas</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-danger mb-0"><s>$1.000</s></p>
                                        <p className="fw-bold text-success">$700 x 500GR</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Ofertas;
