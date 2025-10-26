import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/styleMarlon.css';

function CompraExitosa() {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <div className="compra-container bg-white rounded-4 shadow-sm p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <h4 className="text-success">
              <i className="bi bi-check-circle me-2"></i> Se ha realizado la compra. nro <strong>#20240705</strong>
            </h4>
          </div>

          <h6 className="text-secondary mb-3">Completa la siguiente información</h6>

          <form>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label">Nombre*</label>
                <input type="text" className="form-control" value="pedro" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Apellidos*</label>
                <input type="text" className="form-control" value="hacker" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Correo*</label>
                <input type="email" className="form-control" value="pedro.hacer20@example.com" readOnly />
              </div>
            </div>

            <h6 className="text-secondary mb-3">Dirección de entrega de los productos</h6>
            <div className="row g-3 mb-3">
              <div className="col-md-8">
                <label className="form-label">Calle*</label>
                <input type="text" className="form-control" value="Los cimientos, Edificio Norte" readOnly />
              </div>
              <div className="col-md-4">
                <label className="form-label">Departamento (opcional)</label>
                <input type="text" className="form-control" value="Depto 603" readOnly />
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Región*</label>
                <input type="text" className="form-control" value="Región Metropolitana de Santiago" readOnly />
              </div>
              <div className="col-md-6">
                <label className="form-label">Comuna*</label>
                <input type="text" className="form-control" value="Cerrillos" readOnly />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Indicaciones para la entrega (opcional)</label>
              <textarea className="form-control" rows="2" readOnly>El martes no estaremos en el depto, pero puede dejarlo con el conserje.</textarea>
            </div>
          </form>


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
            <h5>Total pagado: <span className="text-success">$4.900</span></h5>
            <div>
              <button className="btn btn-danger me-2">Imprimir boleta en PDF</button>
              <button className="btn btn-success">Enviar boleta por email</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompraExitosa;