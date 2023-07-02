import axios, { AxiosInstance } from "axios";
import "./ApiSetting";
import { BASE_URL } from "./ApiSetting";
import { ProductProp } from "../Model/Product";


interface ProductAPIInterface extends AxiosInstance {
    getAllProducts: () => Promise<ProductProp[] | null>;
    updateProduct: (product: ProductProp) => Promise<boolean>;
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

ProductApi.updateProduct = async function (product) {
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

