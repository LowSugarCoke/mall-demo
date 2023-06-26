import axios, { AxiosInstance } from "axios";
import "./ApiSetting";
import { BASE_URL } from "./ApiSetting";

interface UserAPIInterface extends AxiosInstance {
    userLogin: (email: string, password: string) => Promise<boolean>;
    userRegister: (email: string, password: string) => Promise<boolean>;
}

export const UserApi = axios.create({
    baseURL: BASE_URL,
}) as UserAPIInterface;


UserApi.userLogin = async function (email, password) {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await this.post('/users/login', { email, password }, config);
        console.log(response.data);
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
                'Content-Type': 'application/json'
            }
        };
        const response = await this.post('/users/register', { email, password }, config);

        return true;
    } catch (error) {
        console.error("Registration failed:", error);
        return false;
    }
}

