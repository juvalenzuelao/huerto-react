import { useState } from 'react';
import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function Categorias() {
    const [categorias, setCategorias] = useState([
        { id: 1, nombre: 'Frutas' },
        { id: 2, nombre: 'Verduras' },
    ]);

    const [categoriaEditada, setCategoriaEditada] = useState(null);
    const [nombreCategoria, setNombreCategoria] = useState('');

    const handleEditar = (categoria) => {
        setCategoriaEditada(categoria);
        setNombreCategoria(categoria.nombre);
    };

    const handleCancelar = () => {
        setCategoriaEditada(null);
        setNombreCategoria('');
    };

    const handleGuardar = (e) => {
        e.preventDefault();
        if (!nombreCategoria.trim()) {
        alert('El nombre de la categoría no puede estar vacío');
        return;
        }

        if (categoriaEditada) {
        // Editar categoría existente
        setCategorias(
            categorias.map((cat) =>
            cat.id === categoriaEditada.id ? { ...cat, nombre: nombreCategoria } : cat
            )
        );
        } else {
        // Agregar nueva categoría
        const nuevaCategoria = {
            id: categorias.length + 1,
            nombre: nombreCategoria,
        };
        setCategorias([...categorias, nuevaCategoria]);
        }

        handleCancelar();
    };

    return (
        <div className="layout">
        <AdminSideBar />

        <main className="content">
            <div className="page-header d-flex align-items-center justify-content-between">
            <h1 className="h5 m-0">Gestión de Categorías</h1>
            <i className="bi bi-bell"></i>
            </div>

            <section className="mt-3">
            {/* Formulario de Nueva / Editar Categoría */}
            <div className="card p-3 mb-4">
                <h5>{categoriaEditada ? 'Editar Categoría' : 'Nueva Categoría'}</h5>
                <form onSubmit={handleGuardar}>
                <div className="mb-3">
                    <label className="form-label">Nombre de la Categoría</label>
                    <input
                    type="text"
                    className="form-control"
                    value={nombreCategoria}
                    onChange={(e) => setNombreCategoria(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success me-2">
                    Guardar
                </button>
                {categoriaEditada && (
                    <button type="button" className="btn btn-secondary" onClick={handleCancelar}>
                    Cancelar
                    </button>
                )}
                </form>
            </div>

            {/* Tabla de Categorías */}
            <h5>Lista de Categorías</h5>
            <table className="table table-striped">
                <thead className="table-success">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {categorias.map((cat) => (
                    <tr key={cat.id}>
                    <td>{cat.id}</td>
                    <td>{cat.nombre}</td>
                    <td>
                        <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEditar(cat)}
                        >
                        Editar
                        </button>
                        <button
                        className="btn btn-sm btn-danger"
                        onClick={() =>
                            setCategorias(categorias.filter((c) => c.id !== cat.id))
                        }
                        >
                        Eliminar
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </section>
        </main>
        </div>
    );
}

export default Categorias;
