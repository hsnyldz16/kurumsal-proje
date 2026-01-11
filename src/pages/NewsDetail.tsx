import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import type { News } from '@/types';

const NewsDetail = () => {

    // 1. URL'den gelen ID'yi yakalıyoruz
    const { id } = useParams<{ id: string }>();

    // 2. Veriyi ve yüklenme durumunu tutacak "Hafıza" alanları (State)
    const [news, setNews] = useState<News | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    // 3. Sayfa ilk açıldığında çalışacak "Etki" (Effect)
    useEffect(() => {
        const fetchDetail = async () => {
            try {
                // Kendi Backend sunucumuza istek atıyoruz
                const response = await axios.get(`http://localhost:5000/api/news/${id}`);

                // Gelen veriyi hafızaya alıyoruz
                setNews(response.data);
                setLoading(false);
            } catch (err) {

                console.error("Haber detayı çekilemedi:", err);
                setError(true);
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id]); // Eğer ID değişirse (başka habere geçilirse) tekrar çalış

    // 4. Kullanıcı Deneyimi İçin Kontroller
    if (loading) return <div className="container mt-5"><h5>Yükleniyor...</h5></div>;
    if (error || !news) return <div className="container mt-5"><h5>Haber bulunamadı!</h5></div>;

    return (
        <div className="container mt-5 pb-5">
            {/* Navigasyon (Breadcrumb) */}
            <nav aria-label="breadcrumb" className="mb-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Ana Sayfa</Link></li>
                    <li className="breadcrumb-item active text-truncate" style={{ maxWidth: '300px' }}>{news.title}</li>
                </ol>
            </nav>

            <div className="card shadow-sm border-0">

                <div className="card-body p-md-5">
                    {/* Haber Kategorisi */}
                    <span className="badge bg-primary mb-3">{news.category}</span>

                    {/* Haber Başlığı */}
                    <h1 className="display-5 fw-bold mb-3">{news.title}</h1>

                    {/* Tarih ve ID Bilgisi */}
                    <p className="text-muted small mb-4">
                        Yayınlanma: {dateFormatter.format(new Date(news.date_created))} | Haber No: {news.id}
                    </p>

                    <hr />

                    {/* Haber İçeriği */}
                    <div className="news-content mt-4" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                        {news.content}
                    </div>

                    <div className="mt-5">
                        <Link to="/" className="btn btn-outline-dark">
                            ← Listeye Geri Dön
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;