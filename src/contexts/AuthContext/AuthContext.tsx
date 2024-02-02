import { ReactNode, createContext, useContext, useState } from 'react';
import { login, register, logout } from '../../services/userService';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

interface AuthContextType {
    isAuthenticated: boolean;
    loginUser: (email: string, password: string) => Promise<void>;
    registerUser: (username: string, email: string, password: string) => Promise<void>;
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

    const loginUser = async (email: string, password: string) => {
        const auth = await login(email, password);
        console.log(auth);

        if (auth.access_token) {
            localStorage.setItem('access_token', JSON.stringify(auth));
            setIsAuthenticated(true);

            navigate('/');
        }
    };

    const registerUser = async (username: string, email: string, password: string) => {
        const reg = await register(username, email, password);
        console.log(reg);
        if (reg.isSuccess !== false) {
            loginUser(email, password);
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
