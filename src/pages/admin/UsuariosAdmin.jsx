import { useState } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com', rol: 'Administrador' },
    { id: 2, nombre: 'María López', correo: 'maria@example.com', rol: 'Cliente' },
    { id: 3, nombre: 'Carlos Díaz', correo: 'carlos@example.com', rol: 'Cliente' },
  ]);

  const [usuarioEditado, setUsuarioEditado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [historialUsuario, setHistorialUsuario] = useState(null);

  const comprasEjemplo = [
    { id: '#001', fecha: '2024-02-15', total: '$25.000', estado: 'Completada' },
    { id: '#002', fecha: '2024-02-14', total: '$18.500', estado: 'En proceso' },
    { id: '#003', fecha: '2024-02-14', total: '$12.000', estado: 'Pendiente' },
  ];

  const handleEditar = (usuario) => {
    setUsuarioEditado(usuario);
    setModoEdicion(true);
    setHistorialUsuario(null);
  };

  const handleVerCompras = (usuario) => {
    setHistorialUsuario({ ...usuario, compras: comprasEjemplo });
    setUsuarioEditado(null);
    setModoEdicion(false);
  };

  const handleNuevoUsuario = () => {
    setUsuarioEditado({ id: '', nombre: '', correo: '', rol: '' });
    setModoEdicion(false);
    setHistorialUsuario(null);
  };

  const handleCancelar = () => {
    setUsuarioEditado(null);
    setModoEdicion(false);
    setHistorialUsuario(null);
  };

  return (
    <div className="layout">
      <AdminSideBar />

      <main className="content">
        <div className="page-header d-flex align-items-center justify-content-between">
          <h1 className="h5 m-0">Gestión de Usuarios</h1>
          <i className="bi bi-bell"></i>
        </div>

        <section className="mt-3">
          <h2 className="mb-3">Lista de Usuarios</h2>

          {/* Botón nuevo usuario */}
          <button className="btn btn-success mb-3" onClick={handleNuevoUsuario}>
            <i className="bi bi-person-plus me-2"></i>Nuevo Usuario
          </button>

          {/* Tabla de usuarios */}
          <table className="table table-striped">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEditar(u)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => handleVerCompras(u)}
                    >
                      Compras
                    </button>
                    <button className="btn btn-sm btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Formulario de usuario */}
          {usuarioEditado && (
            <div className="card mt-4 p-3">
              <h3 className="mb-3">
                {modoEdicion ? 'Editar Usuario' : 'Nuevo Usuario'}
              </h3>
              <form>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.nombre}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, nombre: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      value={usuarioEditado.correo}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, correo: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Rol</label>
                    <select
                      className="form-select"
                      value={usuarioEditado.rol}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, rol: e.target.value })
                      }
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Cliente">Cliente</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={handleCancelar}
                >
                  Cancelar
                </button>
              </form>
            </div>
          )}

          {/* Historial de Compras */}
          {historialUsuario && (
            <div className="mt-5">
              <h3>Historial de Compras de {historialUsuario.nombre}</h3>
              <table className="table table-striped mt-3">
                <thead className="table-success">
                  <tr>
                    <th>N° Orden</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {historialUsuario.compras.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.fecha}</td>
                      <td>{c.total}</td>
                      <td>
                        <span className={`badge ${
                          c.estado === 'Completada' ? 'bg-success' :
                          c.estado === 'En proceso' ? 'bg-warning' :
                          'bg-secondary'
                        }`}>
                          {c.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default UsuariosAdmin;
