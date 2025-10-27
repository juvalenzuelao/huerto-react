import AdminSideBar from '../../components/adminSideBar';
import '../../styles/estilo.css';

function HomeAdmin() {
  return (
    <div className="layout">
      <AdminSideBar />

      <main className="content">
        <div className="page-header d-flex align-items-center justify-content-between">
          <h1 className="h5 m-0">¡Hola, Administrador!</h1>
          <i className="bi bi-bell"></i>
        </div>

        <section className="dashboard-area mt-3">
          <div className="panel top"></div>
          <div className="panel bottom"></div>
        </section>
      </main>
    </div>
  );
}

export default HomeAdmin;