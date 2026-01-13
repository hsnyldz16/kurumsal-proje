import { useState } from "react";

const Contact = () => {

    //Form verilerini tutacak state: TODO: Backend'e göndereceğiz
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Gonderildi:", formData);
        alert("Mesajınız başarıyla gönderildi!");
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-5">Bizimle İletişime Geçin</h1>

            <div className="row g-5">
                {/* SOL KOLON: İletişim Formu */}
                <div className="col-lg-7">
                    <div className="card shadow-sm border-0 p-4">
                        <h3>Bize Yazın</h3>
                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Adınız Soyadınız</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">E-posta Adresiniz</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Konu</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Mesajınız</label>
                                    <textarea
                                        className="form-control"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary px-4 py-2">Gönder</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* SAĞ KOLON: Adres ve Bilgiler */}
                <div className="col-lg-5">
                    <div className="p-4 bg-light rounded shadow-sm h-100">
                        <h3>İletişim Bilgileri</h3>
                        <div className="mt-4">
                            <div className="d-flex mb-4">
                                <div className="icon-box me-3 text-primary">
                                    <i className="bi bi-geo-alt-fill fs-3"></i>
                                </div>
                                <div>
                                    <h5>Adres</h5>
                                    <p className="text-muted">Teknoloji Mahallesi, Yazılım Sokak No:123, Kadıköy/İstanbul</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="icon-box me-3 text-primary">
                                    <i className="bi bi-telephone-fill fs-3"></i>
                                </div>
                                <div>
                                    <h5>Telefon</h5>
                                    <p className="text-muted">+90 212 123 45 67</p>
                                </div>
                            </div>

                            <div className="d-flex mb-4">
                                <div className="icon-box me-3 text-primary">
                                    <i className="bi bi-envelope-fill fs-3"></i>
                                </div>
                                <div>
                                    <h5>E-posta</h5>
                                    <p className="text-muted">info@kurumsalportal.com</p>
                                </div>
                            </div>

                            {/* Harita Alanı (Placeholder) */}
                            <div className="mt-4 border rounded overflow-hidden" style={{ height: '200px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504930105814!2d28.977469!3d41.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzQ1LjAiTiAyOMKwNTgnMzguOSJF!5e0!3m2!1str!2str!4v1642000000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;