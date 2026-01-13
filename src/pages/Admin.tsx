// src/pages/Admin.tsx

import { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate();

    useEffect(() => {

        if (!localStorage.getItem("user")) {
            navigate("/Login");
        }
    }, [navigate]);

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* SOL MENÜ (Sidebar) */}
                <div className="col-md-2 bg-dark min-vh-100 p-3 text-white">
                    <h4 className="mb-4">Admin Paneli</h4>
                    <p className="small border-bottom pb-2">Hoş geldin, {user.full_name}</p>
                    <ul className="nav flex-column mt-3">
                        <li className="nav-item mb-2">
                            <Link to="/admin" className="nav-link text-white p-0">🏠 Dashboard</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/admin/news" className="nav-link text-white p-0">📰 Haber Yönetimi</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/admin/settings" className="nav-link text-white p-0">⚙️ Ayarlar</Link>
                        </li>
                        <li className="nav-item mt-4">
                            <button onClick={handleLogout} className="btn btn-danger btn-sm w-100">Çıkış Yap</button>
                        </li>
                    </ul>
                </div>

                {/* SAĞ İÇERİK ALANI */}
                <div className="col-md-10 p-4">
                    {/* Outlet: Alt rotaların (AdminNews vb.) yükleneceği yer */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;