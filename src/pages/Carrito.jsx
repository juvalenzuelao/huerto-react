import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Carrito() {
  return (
    <>
      <Navbar />

      <div className="container my-4">

        <div className="row">
          {/* Lista de productos */}
          <div className="col-md-6">
            <h4 className="mb-3">Lista de productos</h4>
            <div className="row row-cols-1 row-cols-md-2 g-3">
              {/* Producto 1 */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">Naranja Valencia</h5>
                    <img src="/img/NaranjaValencia.jpg" className="img-fluid rounded" alt="" />
                    <h6 className="text-danger">$1.000</h6>
                    <button className="btn btn-dark btn-sm mt-2">Añadir</button>
                  </div>
                </div>
              </div>

              {/* Producto 2 */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">Pimientos tricolores</h5>
                    <img src="/img/PimientosTricolores.jpg" className="img-fluid rounded" alt="" />
                    <h6 className="text-danger">$1.500</h6>
                    <button className="btn btn-dark btn-sm mt-2">Añadir</button>
                  </div>
                </div>
              </div>

              {/* Producto 3 */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">Zanahorias orgánicas</h5>
                    <img src="/img/ZanahoriasVarias.jpg" className="img-fluid rounded" alt="" />
                    <h6 className="text-danger">$900</h6>
                    <button className="btn btn-dark btn-sm mt-2">Añadir</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carrito de compras */}
          <div className="col-md-6">
            <h4 className="mb-3">Carrito de Compras</h4>
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Naranja Valencia</td>
                  <td>$1.000</td>
                  <td>
                    <input type="number" className="form-control form-control-sm" defaultValue="1" min="1" />
                  </td>
                  <td>$1.000</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>Pimientos tricolores</td>
                  <td>$1.500</td>
                  <td>
                    <input type="number" className="form-control form-control-sm" defaultValue="2" min="1" />
                  </td>
                  <td>$3.000</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>Zanahorias orgánicas</td>
                  <td>$900</td>
                  <td>
                    <input type="number" className="form-control form-control-sm" defaultValue="1" min="1" />
                  </td>
                  <td>$900</td>
                  <td>
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                  </td>
                </tr>
                <tr>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center bg-white rounded-3 shadow-sm p-3 mt-3">
            <h5>
                Total: <span className="text-success">$4,900</span>
            </h5>
            <div>
                <button className="btn btn-outline-secondary me-2">Limpiar</button>
                <Link to="/DetalleCompra">
                    <button className="btn btn-success me-2">Comprar</button>
                </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Carrito;
