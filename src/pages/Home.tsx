import NewsCard from '@/components/NewsCard'; // NewsCard'ı içeri al
import type { News } from '@/types'; // Tipi içeri al

const Home = () => {
    // Haberleri buraya taşıdık
    const newsList: News[] = [
        {
            id: 1,
            title: "React ve TypeScript ile Başlangıç",
            summary: "Modern web dünyasına ilk adımı attık.",
            content: "Uzun içerik...",
            date: "10.01.2024",
            category: "Teknoloji"
        },
        {
            id: 2,
            title: "Bootstrap 5 Entegrasyonu",
            summary: "Tasarım süreçlerini hızlandıran CSS kütüphanesi.",
            content: "Uzun içerik...",
            date: "11.01.2024",
            category: "Güncel"
        },
        {
            id: 3,
            title: "Ekonomi Gündemi",
            summary: "Yazılım dünyasındaki ekonomik gelişmeler.",
            content: "Uzun içerik...",
            date: "12.01.2024",
            category: "Ekonomi"
        }
    ];

    return (
        <div>
            <h1 className="mb-4">Son Haberler</h1>
            <div className="row g-4">
                {newsList.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        {/* Kartlarımızı burada listeliyoruz */}
                        <NewsCard data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;