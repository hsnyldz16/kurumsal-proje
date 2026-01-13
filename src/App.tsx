import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Kurumsal Portalı</Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Ana Sayfa</Link>
            <Link className="nav-link" to="/hakkimizda">Hakkımızda</Link>
            <Link className="nav-link" to="/iletisim">İletişim</Link>
            <Link className="nav-link" to="/login">Giriş Yap</Link>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Sayfa içerikleri burada değişecek */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          {/* Yeni Dinamik Rota: */}
          <Route path="/haber/:id" element={<NewsDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;