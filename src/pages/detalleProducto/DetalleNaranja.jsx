import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/detalleProducto.css';

function DetalleNaranja() {
  const [cantidad, setCantidad] = useState(1);

  const agregarAlCarrito = () => {
    alert(`Agregado: ${cantidad} naranjas`);
  };

  const base = typeof window !== 'undefined' ? window.location.origin : '';
  const shareUrl = `${base}/productos/naranja`;

  return (
    <>
      <Navbar />

      <div className="container my-5">

        <div className="row mb-4">
          <div className="col-md-6">
            <img src="/img/NaranjaValencia.jpg" className="img-fluid rounded" alt="Naranja" />
          </div>

          <div className="col-md-6">
            <div className="caja-compra">
              <h3>FR002 Naranja Valencia</h3>
              <h3 className="text-danger">$1.000 x KG</h3>

              <label className="mb-1">Cantidad:</label>
              <div className="cantidad-selector">
                <button
                  type="button"
                  onClick={() => setCantidad(c => Math.max(1, c - 1))}
                >
                  -
                </button>
                <input type="number" value={cantidad} readOnly aria-label="Cantidad seleccionada" />
                <button
                  type="button"
                  onClick={() => setCantidad(c => c + 1)}
                >
                  +
                </button>
              </div>

              <button className="btn btn-success w-100 mt-3" onClick={agregarAlCarrito}>
                <i className="fa-solid fa-cart-shopping me-2"></i>AÑADIR AL CARRO
              </button>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="seccion-info">
              <h5><i className="fa-solid fa-circle-info me-2"></i>Descripción del Producto</h5>
              <p className="mb-2"><strong>Origen:</strong> Región de Valparaíso, Chile</p>
              <p className="mb-2"><strong>Tipo:</strong> Naranja Valencia Premium</p>
              <p className="mb-0">Naranjas frescas y jugosas, ricas en vitamina C. Perfectas para jugos naturales o consumo directo. Cultivadas de forma orgánica.</p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="comentarios-container">
              <h5><i className="fa-solid fa-comments me-2"></i>Opiniones de Clientes</h5>

              <div className="comentario">
                <div className="comentario-header">
                  <strong>María González</strong>
                  <span className="estrellas-pequenas">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <p>"Excelentes naranjas, muy jugosas y dulces. Perfectas para el desayuno."</p>
                <small className="text-muted">Hace 3 días</small>
              </div>

              <div className="comentario">
                <div className="comentario-header">
                  <strong>Pedro Ramírez</strong>
                  <span className="estrellas-pequenas">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <p>"Buena calidad, llegaron frescas. Solo una venía un poco verde."</p>
                <small className="text-muted">Hace 1 semana</small>
              </div>


              <div className="comentario">
                <div className="comentario-header">
                  <strong>Carla Torres</strong>
                  <span className="estrellas-pequenas">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </span>
                </div>
                <p>"Las mejores naranjas que he comprado online. Muy recomendadas!"</p>
                <small className="text-muted">Hace 2 semanas</small>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="valoracion-container">
              <h5>Valoración General</h5>
              <div className="valoracion-numero">
                <span className="numero-grande">4.5</span>
                <span className="de-cinco"> / 5</span>
              </div>
              <div className="estrellas-grandes">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <p className="total-opiniones">24 opiniones</p>

              <div className="barras-valoracion">
                <div className="barra-item">
                  <span>5 <i className="fa-solid fa-star"></i></span>
                  <div className="barra"><div className="relleno" style={{ width: '70%' }}></div></div>
                  <span>17</span>
                </div>
                <div className="barra-item">
                  <span>4 <i className="fa-solid fa-star"></i></span>
                  <div className="barra"><div className="relleno" style={{ width: '20%' }}></div></div>
                  <span>5</span>
                </div>
                <div className="barra-item">
                  <span>3 <i className="fa-solid fa-star"></i></span>
                  <div className="barra"><div className="relleno" style={{ width: '8%' }}></div></div>
                  <span>2</span>
                </div>
                <div className="barra-item">
                  <span>2 <i className="fa-solid fa-star"></i></span>
                  <div className="barra"><div className="relleno" style={{ width: '2%' }}></div></div>
                  <span>0</span>
                </div>
                <div className="barra-item">
                  <span>1 <i className="fa-solid fa-star"></i></span>
                  <div className="barra"><div className="relleno" style={{ width: '0%' }}></div></div>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="compartir-container">
              <h5><i className="fa-solid fa-share-nodes me-2"></i>Compartir este producto</h5>
              <div className="redes-sociales">
                <a
                  href={`https://wa.me/?text=Mira estas naranjas: ${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-red whatsapp"
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-red facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i> Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Mira estas naranjas')}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-red twitter"
                >
                  <i className="fa-brands fa-x-twitter"></i> X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mb-5">
        <h3 className="text-center mb-4 text-success">Productos relacionados</h3>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Link to="/productos/manzana" className="producto-link">
              <div className="card">
                <img src="/img/ManzanasFuji.jpg" className="card-img-top" alt="Manzana" />
                <div className="card-body">
                  <p className="card-title mb-1">FR001 Manzana Fuji</p>
                  <p className="text-success fw-bold mb-0">$1.200 x KG</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/productos/platano" className="producto-link">
              <div className="card">
                <img src="/img/PlatanoCavendish.png" className="card-img-top" alt="Plátano" />
                <div className="card-body">
                  <p className="card-title mb-1">FR003 Plátano Cavendish</p>
                  <p className="text-success fw-bold mb-0">$800 x KG</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/productos/zanahoria" className="producto-link">
              <div className="card">
                <img src="/img/ZanahoriasOrganicas.png" className="card-img-top" alt="Zanahoria" />
                <div className="card-body">
                  <p className="card-title mb-1">VR001 Zanahorias</p>
                  <p className="text-success fw-bold mb-0">$900 x KG</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <Link to="/productos/espinaca" className="producto-link">
              <div className="card">
                <img src="/img/EspinacasFrescas.jpg" className="card-img-top" alt="Espinaca" />
                <div className="card-body">
                  <p className="card-title mb-1">VR002 Espinacas Frescas</p>
                  <p className="text-success fw-bold mb-0">$700 x 500GR</p>
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

export default DetalleNaranja;
