import { ReactNode, createContext, useContext, useState } from 'react';
import { login, register, logout } from '../../services/userService';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../pages/LoginPage/LoginForm/LoginForm.static';
import { UserRegister } from '../../pages/RegisterPage/RegisterForm/RegisterForm.static';

interface AuthContextType {
    isAuthenticated: boolean;
    loginUser: (user: User) => Promise<User | undefined>;
    registerUser: (user: UserRegister) => Promise<UserRegister | undefined>;
    logoutUser: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const authToken = localStorage.getItem('access_token');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? true : false;
    });

    const authentication = () => {
        const authToken = localStorage.getItem('access_token');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? <Outlet /> : <Navigate to={'/login'} />;
    };
    authentication();

    function isTokenValid(authToken: string) {
        try {
            const decodedToken = jwtDecode(authToken);
            return decodedToken && !isExpired(decodedToken.exp);
        } catch (error) {
            return false;
        }
    }

    function isExpired(exp: number | undefined) {
        const currentTime = Date.now() / 1000;
        return exp < currentTime;
    }

    const loginUser = async (user: User) => {
        try {
            const auth: User = await login(user);
            if (auth.error) {
                return auth;
            }
            console.log('auth', auth);

            if (auth.access_token) {
                localStorage.setItem('access_token', JSON.stringify(auth));
                setIsAuthenticated(true);
                return auth;
            }
        } catch (error) {}
    };

    const registerUser = async (user: UserRegister) => {
        const reg = await register(user);
        console.log(reg);
        if (reg.error) {
            return reg;
        }
        if (!reg.error) {
            await loginUser(user);
            navigate('/clients');
        }
    };

    const logoutUser = () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
        } else {
            logout();
            setIsAuthenticated(false);
            navigate('/');
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginUser, registerUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { useAuth, AuthProvider };
