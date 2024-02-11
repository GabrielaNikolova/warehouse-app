import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { login, register, logout } from '../../services/userService';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { User, UserAuthData } from '../../pages/LoginPage/LoginForm/LoginForm.static';
import { UserRegister } from '../../pages/RegisterPage/RegisterForm/RegisterForm.static';
import { routes } from '../../statics/routes';

interface AuthContextType {
    currentUser: User;
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
    const [currentUser, setCurrentUser] = useState<User>({});

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const authToken = localStorage.getItem('access_token');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? true : false;
    });

    const authentication = () => {
        const authToken = localStorage.getItem('access_token');
        const isValid = authToken && isTokenValid(authToken);
        return isValid ? <Outlet /> : <Navigate to={routes.login} replace />;
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
        if (exp) {
            return exp < currentTime;
        }
    }

    const loginUser = async (data: User) => {
        try {
            const auth: UserAuthData = await login(data);
            if (auth.error) {
                return auth;
            }

            if (auth.access_token) {
                localStorage.setItem('access_token', JSON.stringify(auth.access_token));
                setIsAuthenticated(true);
                if (auth.user) {
                    setCurrentUser(auth.user);
                }
            }
            return auth;
        } catch (error) {}
    };

    useEffect(() => {}, [currentUser]);

    const registerUser = async (user: UserRegister) => {
        const reg = await register(user);
        console.log(reg);
        if (reg.error) {
            return reg;
        }
        if (!reg.error) {
            await loginUser(user);
            <Navigate to={routes.dashboard} />;
        }
    };

    const logoutUser = () => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            <Navigate to={routes.login} />;
        } else {
            logout();
            setIsAuthenticated(false);
            <Navigate to={routes.login} />;
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated, loginUser, registerUser, logoutUser }}>
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
