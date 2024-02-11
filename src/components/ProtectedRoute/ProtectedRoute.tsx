import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { routes } from '../../statics/routes';

function ProtectedRoute() {
    const { currentUser, isAuthenticated } = useAuth();

    if (!currentUser) {
        return <Navigate to={routes.login} />;
    }
    if (!isAuthenticated) {
        return <Navigate to={routes.login} />;
    }

    return <Outlet />;
}

export default ProtectedRoute;
