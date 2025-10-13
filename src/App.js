import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<Productos />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/blogs" element={<Blogs />}/>
        <Route path="/contacto" element={<Contacto />}/>     
        {/* Aquí agregarás las otras rutas después */}
      </Routes>
    </Router>
  );
}

export default App;