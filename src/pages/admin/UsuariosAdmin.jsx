import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminMarco from '../../components/AdminMarco';
import { listarUsuarios, guardarUsuario, eliminarUsuario } from '../../servicios/UsuariosServicio';
import '../../styles/estilo.css';

export default function UsuariosAdmin() {
  const [filas, setFilas] = useState([]);
  const [editando, setEditando] = useState(null); // id o null
  const [q, setQ] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '', rol: 'editor' });

  const { pathname } = useLocation();

  const cargar = async () => setFilas(await listarUsuarios());
  useEffect(() => { cargar(); }, []);

  // Si entras a /admin/nuevo-usuario, abre el form vacío en modo crear
  useEffect(() => {
    if (pathname.endsWith('/nuevo-usuario')) {
      setForm({ nombre: '', email: '', rol: 'editor' });
      setEditando(null);
    }
  }, [pathname]);

  const filtradas = filas.filter(r =>
    [r.nombre, r.email, r.rol].join(' ').toLowerCase().includes(q.toLowerCase())
  );

  const nuevo = () => {
    setForm({ nombre: '', email: '', rol: 'editor' });
    setEditando(null);
  };

  const editar = (u) => {
    setForm({ nombre: u.nombre ?? '', email: u.email ?? '', rol: u.rol ?? 'editor' });
    setEditando(u.id);
  };

  const guardar = async (e) => {
    e.preventDefault();
    await guardarUsuario(editando ? { ...form, id: editando } : form);
    nuevo();
    cargar();
  };

  const eliminar = async (id) => {
    if (window.confirm('¿Eliminar este usuario?')) {
      await eliminarUsuario(id);
      cargar();
    }
  };

  return (
    <AdminMarco titulo="Usuarios">
      <h2 className="mb-2">Usuarios</h2>

      <div className="toolbar" style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Buscar (nombre, email, rol)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button onClick={nuevo}>Nuevo</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nombre</th><th>Email</th><th>Rol</th><th></th>
            </tr>
          </thead>
        <tbody>
          {filtradas.map((r) => (
            <tr key={r.id}>
              <td>{r.nombre}</td>
              <td>{r.email}</td>
              <td>{r.rol}</td>
              <td className="actions" style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => editar(r)}>Editar</button>
                <button className="danger" onClick={() => eliminar(r.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        {filtradas.length === 0 && <p className="muted">Sin datos…</p>}
      </div>

      <form onSubmit={guardar} className="card" style={{ marginTop: 12 }}>
        <h3 className="mb-2">{editando ? 'Editar usuario' : 'Nuevo usuario'}</h3>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <label>Nombre
            <input
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
          </label>
          <label>Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label className="col-2" style={{ gridColumn: 'span 2' }}>Rol
            <select
              value={form.rol}
              onChange={(e) => setForm({ ...form, rol: e.target.value })}
            >
              <option value="admin">admin</option>
              <option value="editor">editor</option>
              <option value="viewer">viewer</option>
            </select>
          </label>
        </div>
        <div className="actions" style={{ marginTop: 8, display: 'flex', gap: 8 }}>
          <button type="submit">Guardar</button>
          {editando && <button type="button" onClick={nuevo}>Cancelar</button>}
        </div>
      </form>
    </AdminMarco>
  );
}
