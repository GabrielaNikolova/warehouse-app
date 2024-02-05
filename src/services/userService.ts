
import { User } from '../pages/LoginPage/LoginForm/LoginForm.static';
import { UserRegister } from '../pages/RegisterPage/RegisterForm/RegisterForm.static';
import { post } from './fetchService';
// TODO: put in the env file
const baseUrl = 'http://localhost:3000/user';

const register = async ({ username, email, password }: UserRegister): Promise<User> => {
    return await post(`${baseUrl}/register`, { username, email, password });
};

const login = async ({ email, password }: User): Promise<User> => {
    return await post(`${baseUrl}/login`, { email, password });
};

const logout = () => {
    localStorage.removeItem('access_token');
};

export { login, register, logout };
