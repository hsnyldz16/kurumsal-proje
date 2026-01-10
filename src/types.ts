// Haber içeriğinin nasıl görüneceğini tanımlıyoruz
export interface News{
    id:number;
    title:string;
    summary:string;
    content:string;
    date:string;
    category:"Teknoloji" | "Güncel" | "Ekonomi"; // Union Type (Ders 05)
}

// Ürün içeriğinin yapısı
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    inStock: boolean;
}

// İletişim formu verisi
export interface ContactFormData {
    fullName: string;
    email: string;
    message: string;
}