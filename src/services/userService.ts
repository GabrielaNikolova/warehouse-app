import { post } from './fetchService';
// TODO: put in the env file
const baseUrl = 'http://localhost:3000/user';

const register = async (username: string, email: string, password: string) => {
    return await post(`${baseUrl}/register`, { username, email, password });
};

const login = async (email: string, password: string) => {
    return await post(`${baseUrl}/login`, { email, password });
};

const logout = () => {
    localStorage.removeItem('access_token');
};

export { login, register, logout };
