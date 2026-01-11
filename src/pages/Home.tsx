import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from '@/components/NewsCard';
import type { News } from '@/types';

const Home = () => {

    // 1. Başlangıçta haber listemiz boş bir dizi []
    const [newsList, setNewsList] = useState<News[]>([]);

    // 2. Yükleniyor durumunu kontrol etmek için bir state
    const [loading, setLoading] = useState<boolean>(true);

    const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    useEffect(() => {

        // 3. Veri çekme fonksiyonu
        const fetchNews = async () => {

            try {

                // API'ye istek atıyoruz
                const response = await axios.get('http://localhost:5000/api/news/');

                // Gelen veriyi kendi formatımıza uyduruyoruz (Mapping)
                const formattedNews: News[] = response.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    summary: item.content.substring(0, 100) + "...",
                    content: item.content,
                    date: dateFormatter.format(new Date(item.date_created)),
                    category: item.category
                }));

                setNewsList(formattedNews);
            } catch (error) {
                console.error("Haberler yüklenirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []); // [] demek: "Bu fonksiyonu sadece sayfa ilk açıldığında çalıştır"

    if (loading) return <div className="text-center mt-5"><h5>Haberler Yükleniyor...</h5></div>;

    return (
        <div className="container">
            <h1 className="my-4">Güncel Haberler</h1>
            <div className="row g-4">
                {newsList.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <NewsCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;