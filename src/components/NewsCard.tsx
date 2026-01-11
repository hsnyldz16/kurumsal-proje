// src/components/NewsCard.tsx
import type { News } from '@/types'; // types.ts dosyasından News interface'i içeri alıyoruz
import { Link } from 'react-router-dom';

// Bileşenin alacağı verileri (Props) tanımlıyoruz
interface Props {
  data: News;
}

const NewsCard = ({ data }: Props) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="badge bg-primary">{data.category}</span>
          <small className="text-muted">{data.date}</small>
        </div>
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text text-secondary">{data.summary}</p>
        <Link to={`/haber/${data.id}`} className="btn btn-primary btn-sm">
          Devamını Oku
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;