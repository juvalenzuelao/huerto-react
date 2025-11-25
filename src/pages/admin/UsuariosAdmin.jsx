import { useState, useEffect } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function UsuariosAdmin() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditado, setUsuarioEditado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [historialUsuario, setHistorialUsuario] = useState(null);
  const [idBuscar, setIdBuscar] = useState("");

  const token = localStorage.getItem("token");

  const comprasEjemplo = [
    { id: '#001', fecha: '2024-02-15', total: '$25.000', estado: 'Completada' },
    { id: '#002', fecha: '2024-02-14', total: '$18.500', estado: 'En proceso' },
    { id: '#003', fecha: '2024-02-14', total: '$12.000', estado: 'Pendiente' },
  ];

  // ========== Cargar todos los usuarios ==========
  const cargarUsuarios = async () => {
    try {
      const res = await fetch("https://backendreact-kfg2.onrender.com/api/usuarios", {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al cargar usuarios", error);
    }
  };

  // ========== Buscar por ID ==========
  const buscarPorId = async (id) => {
    if (!id) return;
    try {
      const res = await fetch(`https://backendreact-kfg2.onrender.com/api/usuarios/${id}`, {
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      if (!res.ok) {
        alert("Usuario no encontrado");
        return;
      }
      const data = await res.json();
      setUsuarios([data]);
    } catch (error) {
      console.error("Error al buscar usuario por ID", error);
    }
  };

  // ========== Crear o Editar usuario ==========
  const handleGuardar = async (e) => {
    e.preventDefault();
    if (!usuarioEditado) return;

    const metodo = modoEdicion ? "PUT" : "POST";
    const url = modoEdicion
      ? `https://backendreact-kfg2.onrender.com/api/usuarios/${usuarioEditado.id}`
      : "https://backendreact-kfg2.onrender.com/api/usuarios";

    try {
      await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(usuarioEditado)
      });
      cargarUsuarios();
      setUsuarioEditado(null);
      setModoEdicion(false);
    } catch (error) {
      console.error("Error al guardar usuario", error);
    }
  };

  // ========== Eliminar usuario ==========
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      await fetch(`https://backendreact-kfg2.onrender.com/api/usuarios/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + token
        }
      });
      cargarUsuarios();
    } catch (error) {
      console.error("Error al eliminar usuario", error);
    }
  };

  // ========== Editar usuario ==========
  const handleEditar = (usuario) => {
    setUsuarioEditado(usuario);
    setModoEdicion(true);
    setHistorialUsuario(null);
  };

  // ========== Ver historial de compras ==========
  const handleVerCompras = (usuario) => {
    setHistorialUsuario({ ...usuario, compras: comprasEjemplo });
    setUsuarioEditado(null);
    setModoEdicion(false);
  };

  // ========== Nuevo usuario ==========
  const handleNuevoUsuario = () => {
    setUsuarioEditado({
      id: '',
      nombres: '',
      apellidos: '',
      rut: '',
      correo: '',
      contrasenna: '',
      direccion: '',
      region: '',
      comuna: '',
      rol: 'USER'
    });
    setModoEdicion(false);
    setHistorialUsuario(null);
  };

  const handleCancelar = () => {
    setUsuarioEditado(null);
    setModoEdicion(false);
    setHistorialUsuario(null);
  };

  // ========== Cargar usuarios al iniciar ==========
  useEffect(() => {
    cargarUsuarios();
  }, []);

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

          {/* Fila de botones */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-secondary me-2" onClick={cargarUsuarios}>
              Cargar Usuarios
            </button>

            <input
              type="number"
              className="form-control me-2"
              placeholder="ID"
              style={{ width: "120px" }}
              value={idBuscar}
              onChange={(e) => setIdBuscar(e.target.value)}
            />
            <button className="btn btn-outline-primary me-2" onClick={() => buscarPorId(idBuscar)}>
              Buscar ID
            </button>

            <button className="btn btn-success" onClick={handleNuevoUsuario}>
              <i className="bi bi-person-plus me-2"></i>Nuevo Usuario
            </button>
          </div>

          {/* Tabla de usuarios */}
          <table className="table table-striped">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Rut</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.nombres}</td>
                  <td>{u.apellidos}</td>
                  <td>{u.rut}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                  <td>
                    <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditar(u)}>
                      Editar
                    </button>
                    <button className="btn btn-sm btn-info me-2" onClick={() => handleVerCompras(u)}>
                      Compras
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleEliminar(u.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Formulario de usuario */}
          {usuarioEditado && (
            <div className="card mt-4 p-3">
              <h3 className="mb-3">{modoEdicion ? 'Editar Usuario' : 'Nuevo Usuario'}</h3>
              <form onSubmit={handleGuardar}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nombres</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.nombres}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, nombres: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Apellidos</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.apellidos}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, apellidos: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">RUT</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.rut}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, rut: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      value={usuarioEditado.contrasenna}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, contrasenna: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Dirección</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.direccion}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, direccion: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Región</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.region}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, region: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Comuna</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditado.comuna}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, comuna: e.target.value })
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Rol</label>
                    <select
                      className="form-select"
                      value={usuarioEditado.rol}
                      onChange={(e) =>
                        setUsuarioEditado({ ...usuarioEditado, rol: e.target.value })
                      }
                    >
                      <option value="USER">Cliente</option>
                      <option value="ADMIN">Administrador</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleCancelar}>
                  Cancelar
                </button>
              </form>
            </div>
          )}

          {/* Historial de Compras */}
          {historialUsuario && (
            <div className="mt-5">
              <h3>Historial de Compras de {historialUsuario.nombres}</h3>
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
