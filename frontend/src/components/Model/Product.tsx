export interface ProductProp {
    productId: number;
    productName: string;
    category: string;
    imageUrl: string;
    price: number;
    stock: number;
    description: string | null;
    createdDate: string;
    lastModifiedDate: string;
}