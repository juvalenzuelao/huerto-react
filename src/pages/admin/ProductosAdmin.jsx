import { useEffect, useState } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function ProductosAdmin() {

  const [productos, setProductos] = useState([]);
  const [productoEditado, setProductoEditado] = useState(null);
  const [modoEdicion, setModoEdicion] = useState(false);

  // estados para los filtros
  const [idBuscar, setIdBuscar] = useState("");
  const [categoriaBuscar, setCategoriaBuscar] = useState("");

  const token = localStorage.getItem("token");

  // ========== Cargar productos ==========
  const cargarProductos = async () => {
    try {
      const res = await fetch("https://backendreact-kfg2.onrender.com/api/productos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos", error);
    }
  };

  // ========== Buscar por ID ==========
  const buscarPorId = async (id) => {
    if (!id) return;
    try {
      const res = await fetch(`https://backendreact-kfg2.onrender.com/api/productos/${id}`);
      const data = await res.json();
      setProductos([data]);
    } catch (error) {
      console.error("Error al buscar producto por ID", error);
    }
  };

  // ========== Buscar por categoría ==========
  const buscarPorCategoria = async (categoria) => {
    if (!categoria) return;
    try {
      const res = await fetch(`https://backendreact-kfg2.onrender.com/api/productos/categoria/${categoria}`);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al buscar productos por categoría", error);
    }
  };

  // ========== Obtener productos críticos ==========
  const cargarCriticos = async () => {
    try {
      const res = await fetch("https://backendreact-kfg2.onrender.com/api/productos/criticos");
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos críticos", error);
    }
  };

  // ========== Crear nuevo producto ==========
  const handleNuevoProducto = () => {
    setProductoEditado({
      id: "",
      nombre: "",
      descripcion: "",
      precio: "",
      cantidadKg: "",
      categoria: "",
      imagenUrl: ""
    });
    setModoEdicion(false);
  };

  // ========== Editar producto ==========
  const handleEditar = (producto) => {
    setProductoEditado({ ...producto });
    setModoEdicion(true);
  };

  // ========== Cancelar ==========
  const handleCancelar = () => {
    setProductoEditado(null);
    setModoEdicion(false);
  };

  // ========== Guardar (crear / editar) ==========
  const handleGuardar = async (e) => {
    e.preventDefault();

    const metodo = modoEdicion ? "PUT" : "POST";
    const url = modoEdicion
      ? `https://backendreact-kfg2.onrender.com/api/productos/${productoEditado.id}`
      : "https://backendreact-kfg2.onrender.com/api/productos";

    try {
      await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(productoEditado)
      });

      cargarProductos();
      setProductoEditado(null);
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  // ========== Eliminar producto ==========
  const handleEliminar = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto?")) return;

    try {
      await fetch(`https://backendreact-kfg2.onrender.com/api/productos/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + token
        }
      });

      cargarProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
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

          {/* Lista Productos */}
          <div className="card-section mb-4">
            <h2 className="mb-3">Lista de Productos</h2>

            {/* === FILA DE BOTONES E INPUTS === */}
            <div className="d-flex align-items-center mb-3">

              {/* Cargar Productos */}
              <button className="btn btn-secondary me-3" onClick={cargarProductos}>
                <i className="bi bi-arrow-clockwise me-2"></i>Cargar Productos
              </button>

              {/* Buscar por ID */}
              <input
                type="number"
                className="form-control me-2"
                placeholder="ID"
                style={{ width: "120px" }}
                value={idBuscar}
                onChange={(e) => setIdBuscar(e.target.value)}
              />
              <button
                className="btn btn-outline-primary me-3"
                onClick={() => buscarPorId(idBuscar)}
              >
                Buscar ID
              </button>

              {/* Buscar por Categoría */}
              <select
                className="form-select me-2"
                style={{ width: "150px" }}
                value={categoriaBuscar}
                onChange={(e) => setCategoriaBuscar(e.target.value)}
              >
                <option value="">Categoría</option>
                <option value="Frutas">Frutas</option>
                <option value="Verduras">Verduras</option>
                <option value="Orgánicos">Orgánicos</option>
              </select>

              <button
                className="btn btn-outline-success me-3"
                onClick={() => buscarPorCategoria(categoriaBuscar)}
              >
                Buscar Categoría
              </button>

              {/* Productos Críticos */}
              <button className="btn btn-warning me-3" onClick={cargarCriticos}>
                <i className="bi bi-exclamation-triangle me-1"></i>Críticos
              </button>

              {/* Nuevo Producto */}
              <button className="btn btn-success" onClick={handleNuevoProducto}>
                <i className="bi bi-plus-circle me-2"></i>Nuevo Producto
              </button>

            </div>

            {/* Tabla */}
            <table className="table table-striped">
              <thead className="table-success">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Kilos</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {productos.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>${p.precio}</td>
                    <td>{p.cantidadKg} Kg</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEditar(p)}
                      >
                        Editar
                      </button>

                      <button 
                        className="btn btn-sm btn-danger"
                        onClick={() => handleEliminar(p.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Formulario Nuevo / Editar */}
          {productoEditado && (
            <div className="card-section mb-4">
              <h3>{modoEdicion ? "Editar Producto" : "Nuevo Producto"}</h3>

              <form onSubmit={handleGuardar}>

                {modoEdicion && (
                  <div className="mb-3">
                    <label>ID</label>
                    <input className="form-control" value={productoEditado.id} readOnly />
                  </div>
                )}

                <div className="row">
                  
                  <div className="col-md-6 mb-3">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={productoEditado.nombre}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, nombre: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Categoría</label>
                    <select
                      className="form-select"
                      value={productoEditado.categoria}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, categoria: e.target.value })
                      }
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Orgánicos">Orgánicos</option>
                    </select>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      value={productoEditado.precio}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, precio: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Kilos</label>
                    <input
                      type="number"
                      className="form-control"
                      value={productoEditado.cantidadKg}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, cantidadKg: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>URL Imagen</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://cloudinary.com/..."
                      value={productoEditado.imagenUrl}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, imagenUrl: e.target.value })
                      }
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label>Descripción</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={productoEditado.descripcion}
                      onChange={(e) =>
                        setProductoEditado({ ...productoEditado, descripcion: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">Guardar</button>
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

        </section>
      </main>

    </div>
  );
}

export default ProductosAdmin;
