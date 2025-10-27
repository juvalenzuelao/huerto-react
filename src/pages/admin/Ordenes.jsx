import { Link, useNavigate } from 'react-router-dom';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function Ordenes() {
    const navigate = useNavigate();

    const irABoleta = () => {
        navigate('../admin/boletas/boleta001'); 
    };

    return (
        <div className="layout">
            <AdminSideBar />

            <main className="content">
                <div className="page-header d-flex align-items-center justify-content-between">
                    <h1 className="h5 m-0">Gestión de Órdenes</h1>
                    <i className="bi bi-bell"></i>
                </div>

                <section className="mt-3">
                    {/* Buscador */}
                    <div className="mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Buscar orden..." 
                        />
                    </div>

                    {/* Tabla de órdenes */}
                    <table className="table table-striped">
                        <thead className="table-success">
                            <tr>
                                <th>N° Orden</th>
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#001</td>
                                <td>2024-02-15</td>
                                <td>María González</td>
                                <td>$25.000</td>
                                <td><span className="badge bg-success">Completada</span></td>
                                <td>
                                    <button 
                                        className="btn btn-sm btn-primary me-2" 
                                        onClick={irABoleta}
                                    >
                                        Ver
                                    </button>
                                    <button className="btn btn-sm btn-secondary">Imprimir</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </section>
            </main>
        </div>
    );
}

export default Ordenes;
