import axios, { AxiosInstance } from "axios";
import "./ApiSetting";
import { BASE_URL } from "./ApiSetting";

interface ProductAPIInterface extends AxiosInstance {
    userLogin: (email: string, password: string) => Promise<boolean>;
    userRegister: (email: string, password: string) => Promise<boolean>;
}

export const ProductApi = axios.create({
    baseURL: BASE_URL,
}) as ProductAPIInterface;


ProductApi.userLogin = async function (email, password) {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await this.post('/users/login', { email, password }, config);

        if (response.data !== 201) {
            console.error("Login failed:", response.data);
            return false;
        }

        console.log(response.data);
        return true;

    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}

ProductApi.userRegister = async function (email, password) {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await this.post('/users/register', { email, password }, config);

        if (response.data != 200) {
            console.error("Login failed:", response.data);
            return false;
        }

        console.log(response.data);
        return true;
    } catch (error) {
        console.error("Registration failed:", error);
        return false;
    }
}

