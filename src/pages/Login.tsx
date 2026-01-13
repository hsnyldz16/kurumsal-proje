// src/pages/Login.tsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {

        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/login',
                {
                    username,
                    password
                });

            if (res.data.success) {

                //Kullanıcı bilgisini tarayıcı hafızasına al
                localStorage.setItem('user', JSON.stringify(res.data.user));
                alert('Hoşgeldiniz ' + res.data.user.full_name);
                navigate('/admin');
            }
        } catch (err: any) {
            alert(err.response?.data?.message || "Giriş başarısız!");
        };

    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Admin Girişi</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Kullanıcı Adı</label>
                                <input type="text" className="form-control" onChange={e => setUsername(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Şifre</label>
                                <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <button className="btn btn-primary w-100">Giriş Yap</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;