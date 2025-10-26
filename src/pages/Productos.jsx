import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styleMarlon.css';

function Productos() {
    return (
        <>
            <Navbar />

            <div className="container text-center tamannoGrid">
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo-productos">Productos Huerto Hogar</h1>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/naranja">
                            <div className="card">
                                <img src="/img/NaranjaValencia.jpg" className="card-img-top imgGrid" alt="Naranja Valencia" />
                                <div className="card-body">
                                    <p className="card-text text-start">FR002 Naranja Valencia</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$1.000 x KG</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/platano">
                            <div className="card">
                                <img src="/img/PlatanoCavendish.png" className="card-img-top imgGrid" alt="Plátanos Cavendish" />
                                <div className="card-body">
                                    <p className="card-text text-start">FR003 Plátanos Cavendish</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$800 x KG</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/zanahoria">
                            <div className="card">
                                <img src="/img/ZanahoriasOrganicas.png" className="card-img-top imgGrid" alt="Zanahorias" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR001 Zanahorias</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$900 x KG</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/espinaca">
                            <div className="card">
                                <img src="/img/EspinacasFrescas.jpg" className="card-img-top imgGrid" alt="Espinacas Frescas" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR002 Espinacas Frescas</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$700 x 500GR</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container text-center tamannoGrid">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/manzana">
                            <div className="card">
                                <img src="/img/ManzanasFuji.jpg" className="card-img-top imgGrid" alt="Manzana Fuji" />
                                <div className="card-body">
                                    <p className="card-text text-start">FR001 Manzana Fuji</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$1.200 x KG</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/miel">
                            <div className="card">
                                <img src="/img/MielOrganica.jpg" className="card-img-top imgGrid" alt="Miel orgánica" />
                                <div className="card-body">
                                    <p className="card-text text-start">PO001 Miel orgánica</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$5000 x GR</b></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <Link to="/productos/pimiento">
                            <div className="card">
                                <img src="/img/PimientosTricolores.jpg" className="card-img-top imgGrid" alt="Pimientos tricolores" />
                                <div className="card-body">
                                    <p className="card-text text-start">VR003 Pimientos tricolores</p>
                                    <hr />
                                    <div className="text-end">
                                        <p className="text-end otro"><b className="colorSecundario">$1500 x KG</b></p>
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

export default Productos;