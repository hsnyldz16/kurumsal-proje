import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewsDetail from './pages/NewsDetail';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminNews from './pages/AdminNews';

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
          <Route path="/admin/haber" element={<AdminNews />} />
          {/* Alternatif olarak /admin/news rotasını da ekliyoruz */}
          <Route path="/admin/news" element={<AdminNews />} />

          {/* Yeni Dinamik Rota: */}
          <Route path="/haber/:id" element={<NewsDetail />} />

          {/* 404 Sayfası */}
          <Route path="*" element={<div className="text-center mt-5"><h2>404 - Sayfa Bulunamadı</h2><p>Aradığınız sayfa mevcut değil.</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;