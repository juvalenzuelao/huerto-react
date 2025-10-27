import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styleMarlon.css';

function Main() {
  return (
    <>
      <Navbar />

      <div className="container tamannoGrid">
        <div className="row justify-content-end">
          <div className="col-auto">
            <Link to="/iniciar-sesion"><b>Iniciar sesión</b></Link>
          </div>
          <div className="col-auto">
            <Link to="/registrar-sesion"><b>Registrar usuario</b></Link>
          </div>
        </div>
      </div>

      <div className="container mt-4 containerInfo">
        <div className="row">
          <div className="col-md-6 infoTienda">
            <h2>Tienda Online</h2>
            <p>
              En Huerto Hogar, te ofrecemos todo lo que necesitas para crear y mantener tu propio huerto en casa.
              Desde semillas orgánicas hasta herramientas de jardinería, tenemos todo lo que necesitas para cultivar
              tus propias frutas y verduras frescas.
            </p>
            <p>
              Nuestro compromiso es brindarte productos de alta calidad y asesoramiento experto para que tu experiencia
              de jardinería sea exitosa y gratificante.
            </p>
            <Link to="/productos" className="btn btn-primary">Ver Productos</Link>
          </div>

          <div className="col-md-6">
            <img src="/img/LogoHuerto.png" alt="Huerto" className="img-fluid rounded logoTienda" />
          </div>
        </div>
      </div>

      <div className="container text-center tamannoGrid">
        <div className="row">
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

export default Main;