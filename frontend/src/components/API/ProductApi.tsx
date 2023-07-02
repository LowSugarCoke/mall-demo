import axios, { AxiosInstance } from "axios";
import "./ApiSetting";
import { BASE_URL } from "./ApiSetting";
import { ProductProp } from "../Model/Product";

export interface CreateProductDTO {
    productName: string;
    category: string;
    imageUrl: string;
    price: number;
    stock: number;
    description: string | null;
}


interface ProductAPIInterface extends AxiosInstance {
    getAllProducts: () => Promise<ProductProp[] | null>;
    updateProduct: (product: ProductProp) => Promise<boolean>;
    createProduct: (product: ProductProp) => Promise<boolean>;
}

export const ProductApi = axios.create({
    baseURL: BASE_URL,
}) as ProductAPIInterface;


ProductApi.getAllProducts = async function () {
    try {
        const response = await this.get('/products');

        if (response.status !== 200) {
            console.error("Get all products failed:", response.data);
            return null;
        }

        return response.data.results;

    } catch (error) {
        console.error("Get all products failed:", error);
        return null;
    }
}

ProductApi.updateProduct = async function (product: ProductProp) {
    try {
        const response = await this.put(`/products/${product.productId}`, product);

        if (response.status !== 200) {
            console.error("Update product failed:", response.data);
            return false;
        }

        return true;

    } catch (error) {
        console.error("Update product failed:", error);
        return false;
    }
}
ProductApi.createProduct = async function (product: ProductProp) {
    try {
        const productDTO: CreateProductDTO = {
            productName: product.productName,
            category: product.category,
            imageUrl: product.imageUrl,
            price: product.price,
            stock: product.stock,
            description: product.description
        };

        const response = await this.post(`/products`, productDTO);
        if (response.status !== 201) {
            console.error("Create product failed:", response.data);
            return false;
        }
        return true;
    } catch (error) {
        console.error("Create product failed:", error);
        return false;
    }
}


