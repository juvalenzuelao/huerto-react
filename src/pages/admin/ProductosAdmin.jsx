import { useState } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function ProductosAdmin() {
  const [productos, setProductos] = useState([
    { sku: 'FR001', nombre: 'Manzana Fuji', categoria: 'Frutas', precio: 1200, stock: 50, descripcion: 'Manzanas frescas' },
    { sku: 'FR002', nombre: 'Naranja Valencia', categoria: 'Frutas', precio: 1000, stock: 10, descripcion: 'Naranjas jugosas' },
    { sku: 'VR001', nombre: 'Zanahorias', categoria: 'Verduras', precio: 900, stock: 5, descripcion: 'Zanahorias crujientes' },
  ]);

  const [productoEditado, setProductoEditado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  const productosMasVendidos = [
    { sku: 'FR002', nombre: 'Naranja Valencia', ventas: 120 },
    { sku: 'VR001', nombre: 'Zanahorias', ventas: 95 },
  ];

  const productosCriticos = productos.filter(p => p.stock < 20);

  const handleEditar = (producto) => {
    setProductoEditado(producto);
    setModoEdicion(true);
  };

  const handleNuevoProducto = () => {
    setProductoEditado({
      sku: '',
      nombre: '',
      categoria: '',
      precio: '',
      stock: '',
      descripcion: '',
    });
    setModoEdicion(false);
  };

  const handleCancelar = () => {
    setProductoEditado(null);
    setModoEdicion(false);
  };

  const handleGuardar = (e) => {
    e.preventDefault();
    if (!modoEdicion) {
      setProductos([...productos, productoEditado]);
    }
    setProductoEditado(null);
  };

  return (
    <div className="layout">
      <AdminSideBar />

      <main className="content">
        <div className="page-header d-flex align-items-center justify-content-between">
          <h1 className="h5 m-0">Gestión de Productos</h1>
          <i className="bi bi-bell"></i>
        </div>

        <section className="mt-3">

          {/* Lista de Productos */}
          <div className="card-section mb-4">
            <h2 className="mb-3">Lista de Productos</h2>
            <button className="btn btn-success mb-3" onClick={handleNuevoProducto}>
              <i className="bi bi-plus-circle me-2"></i>Nuevo Producto
            </button>
            <table className="table table-striped">
              <thead className="table-success">
                <tr>
                  <th>SKU</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Stock</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((p) => (
                  <tr key={p.sku}>
                    <td>{p.sku}</td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>${p.precio}</td>
                    <td>{p.stock}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditar(p)}>Editar</button>
                      <button className="btn btn-sm btn-danger">Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Formulario Nuevo/Editar Producto */}
          {productoEditado && (
            <div className="card-section mb-4">
              <h3>{modoEdicion ? 'Editar Producto' : 'Nuevo Producto'}</h3>
              <form onSubmit={handleGuardar}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">SKU</label>
                    <input
                      type="text"
                      className="form-control"
                      value={productoEditado.sku}
                      onChange={(e) => setProductoEditado({ ...productoEditado, sku: e.target.value })}
                      readOnly={modoEdicion}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={productoEditado.nombre}
                      onChange={(e) => setProductoEditado({ ...productoEditado, nombre: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Categoría</label>
                    <select
                      className="form-select"
                      value={productoEditado.categoria}
                      onChange={(e) => setProductoEditado({ ...productoEditado, categoria: e.target.value })}
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Orgánicos">Orgánicos</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      value={productoEditado.precio}
                      onChange={(e) => setProductoEditado({ ...productoEditado, precio: e.target.value })}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      value={productoEditado.stock}
                      onChange={(e) => setProductoEditado({ ...productoEditado, stock: e.target.value })}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={productoEditado.descripcion}
                      onChange={(e) => setProductoEditado({ ...productoEditado, descripcion: e.target.value })}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Guardar</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={handleCancelar}>Cancelar</button>
              </form>
            </div>
          )}

          {/* Productos Críticos */}
          <div className="card-section mb-4">
            <h3>Productos Críticos (Stock Bajo)</h3>
            <table className="table table-striped mt-3">
              <thead className="table-danger">
                <tr>
                  <th>SKU</th>
                  <th>Nombre</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tbody>
                {productosCriticos.map(p => (
                  <tr key={p.sku}>
                    <td>{p.sku}</td>
                    <td>{p.nombre}</td>
                    <td>{p.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Productos Más Vendidos */}
          <div className="card-section mb-4">
            <h3>Productos Más Vendidos</h3>
            <table className="table table-striped mt-3">
              <thead className="table-success">
                <tr>
                  <th>SKU</th>
                  <th>Nombre</th>
                  <th>Ventas</th>
                </tr>
              </thead>
              <tbody>
                {productosMasVendidos.map(p => (
                  <tr key={p.sku}>
                    <td>{p.sku}</td>
                    <td>{p.nombre}</td>
                    <td>{p.ventas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>
      </main>
    </div>
  );
}

export default ProductosAdmin;
