import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styleMarlon.css';
import { Link } from 'react-router-dom';

function CompraCancelada() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="compra-container bg-white rounded-4 shadow-sm p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h4 className="text-danger">
              <i className="bi bi-x-circle me-2"></i> No se pudo realizar el pago. nro <strong>#20240705</strong>
            </h4>
          </div>

          <div className="text-center mb-4">
            <Link to="/DetalleCompra">
              <button className="btn btn-success px-4">VOLVER A REALIZAR EL PAGO</button>
            </Link>

          </div>


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

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h5>Total: <span className="text-success">$4.900</span></h5>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompraCancelada;