//src/pages/AdminNews.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { News } from '@/types';

const AdminNews = () => {

    const [newsList, setNewsList] = useState<News[]>([]);
    const [newNews, setNewNews] = useState({ title: '', summary: '', content: '', category: 'Teknoloji' });

    // Haberleri Getir (Status 3 -silinmiş- olmayanlar)
    const fetchNews = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/admin/news');
            setNewsList(res.data);
        } catch (err) {
            console.error("Haberler yüklenirken hata:", err);
        }
    };

    useEffect(() => { fetchNews(); }, []);

    // Haber Ekle
    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/news', newNews);
            alert("Haber başarıyla eklendi!");
            setNewNews({ title: '', summary: '', content: '', category: 'Teknoloji' });
            fetchNews();
        } catch (err) {
            alert("Ekleme başarısız.");
        }
    };

    // Soft Delete (Status'ü 3 yap)
    const handleDelete = async (id: number) => {
        if (window.confirm("Bu haberi silmek istediğinize emin misiniz?")) {
            try {
                await axios.patch(`http://localhost:5000/api/news/delete/${id}`);
                fetchNews();
            } catch (err) {
                alert("Silme hatası.");
            }
        }
    };

    return (
        <div className="admin-news">
            <h2 className="mb-4">Haber Yönetimi</h2>
            <div className="row">
                {/* Form Alanı */}
                <div className="col-lg-4">
                    <div className="card shadow-sm p-3 mb-4">
                        <h5>Yeni Haber Ekle</h5>
                        <form onSubmit={handleSave}>
                            <input type="text" className="form-control mb-2" placeholder="Başlık" value={newNews.title} onChange={e => setNewNews({ ...newNews, title: e.target.value })} required />
                            <textarea className="form-control mb-2" placeholder="Özet" value={newNews.summary} onChange={e => setNewNews({ ...newNews, summary: e.target.value })} required />
                            <textarea className="form-control mb-2" placeholder="İçerik" rows={4} value={newNews.content} onChange={e => setNewNews({ ...newNews, content: e.target.value })} required />
                            <select className="form-select mb-3" value={newNews.category} onChange={e => setNewNews({ ...newNews, category: e.target.value })}>
                                <option value="Teknoloji">Teknoloji</option>
                                <option value="Ekonomi">Ekonomi</option>
                                <option value="Güncel">Güncel</option>
                            </select>
                            <button className="btn btn-success w-100">Kaydet</button>
                        </form>
                    </div>
                </div>

                {/* Liste Alanı */}
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>Başlık</th>
                                    <th>Kategori</th>
                                    <th>İşlem</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newsList.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td><span className="badge bg-info text-dark">{item.category}</span></td>
                                        <td>
                                            <button onClick={() => handleDelete(item.id)} className="btn btn-outline-danger btn-sm">Sil</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNews;