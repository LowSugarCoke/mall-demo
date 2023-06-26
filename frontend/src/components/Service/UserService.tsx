import axios from 'axios';
import { AxiosInstance } from "axios";
import "./ServiceSetting";

interface UserAPIInterface extends AxiosInstance {
    userLogin: (email: string, password: string) => Promise<boolean>;
    userRegister: (email: string, password: string) => Promise<boolean>;
}

export const UserApi = axios.create({
    baseURL: 'http://localhost:8080',
}) as UserAPIInterface;


UserApi.userLogin = async function (email, password) {
    try {
        const config = {
            headers: {
                // 這裡可以加入你需要的headers
            }
        };
        const response = await this.post('/', { email, password }, config);

        // 可能還需要處理 response
        // 如：return response.data;
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}

UserApi.userRegister = async function (email, password) {
    try {
        const config = {
            headers: {
                // 這裡可以加入你需要的headers
            }
        };
        const response = await this.post('/', { email, password }, config);

        // 可能還需要處理 response
        // 如：return response.data;
        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}


