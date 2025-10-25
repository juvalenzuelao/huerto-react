import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styleMarlon.css';
import { Link } from 'react-router-dom';

function DetalleCompra() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="bg-white rounded-4 shadow-sm p-4">
          {/* Título */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold">Carrito de compra</h4>
          </div>
          <p className="text-muted mb-4">Completa la siguiente información</p>

          {/* Tabla de productos */}
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="/img/NaranjaValencia.jpg" className="bg-light rounded tabla" alt="Naranja" /></td>
                  <td>Naranja Valencia</td>
                  <td>$1.000</td>
                  <td>1</td>
                  <td>$1.000</td>
                </tr>
                <tr>
                  <td><img src="/img/PimientosTricolores.jpg" className="bg-light rounded tabla" alt="Naranja" /></td>
                  <td>Pimientos tricolores</td>
                  <td>$1.500</td>
                  <td>2</td>
                  <td>$3.000</td>
                </tr>
                <tr>
                  <td><img src="/img/ZanahoriasOrganicas.png" className="bg-light rounded tabla" alt="Naranja" /></td>
                  <td>Zanahorias orgánicas</td>
                  <td>$900</td>
                  <td>1</td>
                  <td>$900</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Información del cliente */}
          <div className="mt-5">
            <h5 className="fw-bold">Información del cliente</h5>
            <p className="text-muted">Completa la siguiente información</p>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Nombre*</label>
                <input type="text" className="form-control" placeholder="Nombre" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Apellidos*</label>
                <input type="text" className="form-control" placeholder="Apellidos" />
              </div>
              <div className="col-12">
                <label className="form-label">Correo*</label>
                <input type="email" className="form-control" placeholder="Correo electrónico" />
              </div>
            </div>
          </div>

          {/* Dirección de entrega */}
          <div className="mt-5">
            <h5 className="fw-bold">Dirección de entrega de los productos</h5>
            <p className="text-muted">Ingrese dirección de forma detallada</p>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Calle*</label>
                <input type="text" className="form-control" placeholder="Ej: Calle Principal 123" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Departamento (opcional)</label>
                <input type="text" className="form-control" placeholder="Ej: 603" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Región*</label>
                <select className="form-select">
                  <option>Región Metropolitana de Santiago</option>
                  <option>Valparaíso</option>
                  <option>Biobío</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Comuna*</label>
                <select className="form-select">
                  <option>Cerrillos</option>
                  <option>Maipú</option>
                  <option>Las Condes</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label">Indicaciones para la entrega (opcional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Entre calles, color del edificio, no tiene timbre."
                />
              </div>
            </div>
          </div>

          {/* Botón de pago */}
          <div className="text-end mt-4">
            <Link to="/CompraExitosa">
              <button className="btn btn-success px-4 py-2 fs-6 rounded-3">
                Pagar ahora $4.900
              </button> 
            </Link>
            <Link to= "/CompraCancelada">
              <button className="btn btn-danger">Compra cancelada</button>
            </Link>
            

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DetalleCompra;
