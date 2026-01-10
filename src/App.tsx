import 'bootstrap/dist/css/bootstrap.min.css'; 
import NewsCard from '@/components/NewsCard';
import type { News } from '@/types';

function App() {
  // 1. Haberleri bir dizi (Array) içinde tanımlıyoruz
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
    <div className="container mt-5">
      <h2 className="mb-4">Son Haberler</h2>
      <div className="row g-4">
        {/* 2. jQuery $.each yerine .map() kullanıyoruz */}
        {newsList.map((item) => (
          <div className="col-md-4" key={item.id}>
            <NewsCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;