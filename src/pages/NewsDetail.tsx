import { useParams, Link } from 'react-router-dom';

const NewsDetail = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="container mt-5">
            <h1>Haber Detay</h1>
            <p>Görüntülenen Haber ID: <strong>{id}</strong></p>
            <Link to="/" className="btn btn-secondary">Geri Dön</Link>
        </div>
    );
};

// BU SATIRI EKLEMELİSİN:
export default NewsDetail;