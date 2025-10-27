import AdminSideBar from '../../../components/adminSideBar';


function Boleta001() {
    // Datos de ejemplo de la boleta
    const boleta = {
        numero: '#20240705',
        cliente: {
        nombre: 'Pedro',
        apellidos: 'Hacker',
        email: 'pedro.hacer20@example.com',
        },
        direccion: {
        calle: 'Los cimientos, Edificio Norte',
        depto: 'Depto 603',
        region: 'Región Metropolitana de Santiago',
        comuna: 'Cerrillos',
        indicaciones: 'El martes no estaremos en el depto, pero puede dejarlo con el conserje.',
        },
        productos: [
        { img: '/img/NaranjaValencia.jpg', nombre: 'Naranja Valencia', precio: 1000, cantidad: 1 },
        { img: '/img/PimientosTricolores.jpg', nombre: 'Pimientos tricolores', precio: 1500, cantidad: 2 },
        { img: '/img/ZanahoriasOrganicas.png', nombre: 'Zanahorias orgánicas', precio: 900, cantidad: 1 },
        ]
    };

    const total = boleta.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

    return (
        <div className="layout">
        <AdminSideBar />

        <main className="content">
            <div className="page-header d-flex align-items-center justify-content-between">
            <h1 className="h5 m-0">Boleta {boleta.numero}</h1>
            </div>

            <section className="mt-3">
            <div className="compra-container bg-white rounded-4 shadow-sm p-4">
                {/* Datos del cliente */}
                <h4 className="text-success mb-3">
                <i className="bi bi-check-circle me-2"></i> Compra realizada
                </h4>

                <h6 className="text-secondary mb-3">Información del cliente</h6>
                <div className="row g-3 mb-4">
                <div className="col-md-4">
                    <label className="form-label">Nombre*</label>
                    <input type="text" className="form-control" value={boleta.cliente.nombre} readOnly />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Apellidos*</label>
                    <input type="text" className="form-control" value={boleta.cliente.apellidos} readOnly />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Correo*</label>
                    <input type="email" className="form-control" value={boleta.cliente.email} readOnly />
                </div>
                </div>

                {/* Dirección */}
                <h6 className="text-secondary mb-3">Dirección de entrega</h6>
                <div className="row g-3 mb-3">
                <div className="col-md-8">
                    <label className="form-label">Calle*</label>
                    <input type="text" className="form-control" value={boleta.direccion.calle} readOnly />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Departamento (opcional)</label>
                    <input type="text" className="form-control" value={boleta.direccion.depto} readOnly />
                </div>
                </div>
                <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <label className="form-label">Región*</label>
                    <input type="text" className="form-control" value={boleta.direccion.region} readOnly />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Comuna*</label>
                    <input type="text" className="form-control" value={boleta.direccion.comuna} readOnly />
                </div>
                </div>
                <div className="mb-4">
                <label className="form-label">Indicaciones para la entrega (opcional)</label>
                <textarea className="form-control" rows="2" readOnly>{boleta.direccion.indicaciones}</textarea>
                </div>

                {/* Productos */}
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
                    {boleta.productos.map((p, i) => (
                        <tr key={i}>
                        <td><img src={p.img} alt={p.nombre} className="bg-light rounded tabla" /></td>
                        <td>{p.nombre}</td>
                        <td>${p.precio}</td>
                        <td>{p.cantidad}</td>
                        <td>${p.precio * p.cantidad}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>

                {/* Total y acciones */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                <h5>Total pagado: <span className="text-success">${total}</span></h5>
                <div>
                    <button className="btn btn-danger me-2">Imprimir boleta en PDF</button>
                    <button className="btn btn-success">Enviar boleta por email</button>
                </div>
                </div>
            </div>
            </section>
        </main>
        </div>
    );
}

export default Boleta001;
