import { useEffect, useState } from 'react';
import AdminMarco from '../../components/AdminMarco';
import { listarProductos, guardarProducto, eliminarProducto } from '../../servicios/ProductosServicio';
import '../../styles/estilo.css';

export default function ProductosAdmin() {
  const [filas, setFilas] = useState([]);
  const [editando, setEditando] = useState(null); // id o null
  const [q, setQ] = useState('');
  const [form, setForm] = useState({
    sku: '', nombre: '', categoria: '', precio: 0, stock: 0, img: '', descripcion: ''
  });

  const cargar = async () => setFilas(await listarProductos());
  useEffect(() => { cargar(); }, []);

  const filtradas = filas.filter(r =>
    [r.nombre, r.sku, r.categoria].join(' ').toLowerCase().includes(q.toLowerCase())
  );

  const nuevo = () => {
    setForm({ sku: '', nombre: '', categoria: '', precio: 0, stock: 0, img: '', descripcion: '' });
    setEditando(null);
  };

  const editar = (p) => {
    setForm({
      sku: p.sku ?? '',
      nombre: p.nombre ?? '',
      categoria: p.categoria ?? '',
      precio: Number(p.precio) || 0,
      stock: Number(p.stock) || 0,
      img: p.img ?? '',
      descripcion: p.descripcion ?? '',
    });
    setEditando(p.id);
  };

  const guardar = async (e) => {
    e.preventDefault();
    await guardarProducto(editando ? { ...form, id: editando } : form);
    nuevo();
    cargar();
  };

  const eliminar = async (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      await eliminarProducto(id);
      cargar();
    }
  };

  return (
    <AdminMarco titulo="Productos">
      <h2 className="mb-2">Productos</h2>

      <div className="toolbar" style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Buscar (nombre, SKU, categoría)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button onClick={nuevo}>Nuevo</button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>SKU</th><th>Nombre</th><th>Categoría</th><th>Precio</th><th>Stock</th><th></th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map((r) => (
              <tr key={r.id}>
                <td>{r.sku}</td>
                <td>{r.nombre}</td>
                <td>{r.categoria}</td>
                <td>${r.precio}</td>
                <td>{r.stock}</td>
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
        <h3 className="mb-2">{editando ? 'Editar producto' : 'Nuevo producto'}</h3>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <label>SKU
            <input
              value={form.sku}
              onChange={(e) => setForm({ ...form, sku: e.target.value })}
              required
            />
          </label>
          <label>Nombre
            <input
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              required
            />
          </label>
          <label>Categoría
            <input
              value={form.categoria}
              onChange={(e) => setForm({ ...form, categoria: e.target.value })}
            />
          </label>
          <label>Precio
            <input
              type="number"
              value={form.precio}
              onChange={(e) => setForm({ ...form, precio: Number(e.target.value) })}
            />
          </label>
          <label>Stock
            <input
              type="number"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
            />
          </label>
          <label className="col-2" style={{ gridColumn: 'span 2' }}>Imagen URL
            <input
              value={form.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
            />
          </label>
          <label className="col-2" style={{ gridColumn: 'span 2' }}>Descripción
            <textarea
              rows={3}
              value={form.descripcion}
              onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
            />
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
