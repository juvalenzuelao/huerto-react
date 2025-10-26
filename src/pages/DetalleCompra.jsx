import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styleMarlon.css";

function DetalleCompra() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    calle: "",
    departamento: "",
    region: "",
    comuna: "",
    indicaciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {

    if (!formData.nombre || formData.nombre.trim() === "" || formData.nombre.length > 30) {
      alert("El nombre es obligatorio");
      return false;
    }


    if (!formData.apellidos || formData.apellidos.trim() === "" || formData.apellidos.length > 30) {
      alert("Los apellidos son obligatorios");
      return false;
    }


    const correoRegex = /^[\w\.-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
    if (!formData.correo || !correoRegex.test(formData.correo.trim()) || formData.correo.length > 100) {
      alert("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com y tener máximo 100 caracteres.");
      return false;
    }


    if (!formData.calle || formData.calle.trim() === "" || formData.calle.length > 300) {
      alert("La dirección (calle) es obligatoria y debe tener máximo 300 caracteres.");
      return false;
    }


    if (!formData.region || formData.region === "") {
      alert("Debe seleccionar una región.");
      return false;
    }


    if (!formData.comuna || formData.comuna === "") {
      alert("Debe seleccionar una comuna.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    alert("Compra validada con éxito. Redirigiendo al comprobante...");
    console.log("Datos de la compra:", formData);
    navigate("/CompraExitosa");
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="bg-white rounded-4 shadow-sm p-4">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold">Carrito de compra</h4>
          </div>
          <p className="text-muted mb-4">Completa la siguiente información</p>


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
                  <td>
                    <img src="/img/NaranjaValencia.jpg" className="bg-light rounded tabla" alt="Naranja" />
                  </td>
                  <td>Naranja Valencia</td>
                  <td>$1.000</td>
                  <td>1</td>
                  <td>$1.000</td>
                </tr>
                <tr>
                  <td>
                    <img src="/img/PimientosTricolores.jpg" className="bg-light rounded tabla" alt="Pimientos" />
                  </td>
                  <td>Pimientos tricolores</td>
                  <td>$1.500</td>
                  <td>2</td>
                  <td>$3.000</td>
                </tr>
                <tr>
                  <td>
                    <img src="/img/ZanahoriasOrganicas.png" className="bg-light rounded tabla" alt="Zanahorias" />
                  </td>
                  <td>Zanahorias orgánicas</td>
                  <td>$900</td>
                  <td>1</td>
                  <td>$900</td>
                </tr>
              </tbody>
            </table>
          </div>


          <form onSubmit={handleSubmit}>

            <div className="mt-5">
              <h5 className="fw-bold">Información del cliente</h5>
              <p className="text-muted">Completa la siguiente información</p>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nombre*</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Nombre"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Apellidos*</label>
                  <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Apellidos"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Correo*</label>
                  <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Correo electrónico"
                  />
                </div>
              </div>
            </div>


            <div className="mt-5">
              <h5 className="fw-bold">Dirección de entrega de los productos</h5>
              <p className="text-muted">Ingrese dirección de forma detallada</p>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Calle*</label>
                  <input
                    type="text"
                    name="calle"
                    value={formData.calle}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ej: Calle Principal 123"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Departamento (opcional)</label>
                  <input
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ej: 603"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Región*</label>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Seleccione una región</option>
                    <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="Biobío">Biobío</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Comuna*</label>
                  <select
                    name="comuna"
                    value={formData.comuna}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Seleccione una comuna</option>
                    <option value="Cerrillos">Cerrillos</option>
                    <option value="Maipú">Maipú</option>
                    <option value="Las Condes">Las Condes</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Indicaciones para la entrega (opcional)</label>
                  <input
                    type="text"
                    name="indicaciones"
                    value={formData.indicaciones}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Ej: Entre calles, color del edificio, no tiene timbre."
                  />
                </div>
              </div>
            </div>


            <div className="text-end mt-4">
              <button type="submit" className="btn btn-success px-4 py-2 fs-6 rounded-3">
                Pagar ahora $4.900
              </button>
              <Link to="/CompraCancelada">
                <button type="button" className="btn btn-danger ms-2">
                  Compra cancelada
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DetalleCompra;
