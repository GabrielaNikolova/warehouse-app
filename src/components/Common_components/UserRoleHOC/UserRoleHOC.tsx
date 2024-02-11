import { useAuth } from '../../../contexts/AuthContext/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function UserRoleHOC() {
    const { currentUser } = useAuth();
    const location = useLocation();
    const { pathname } = location;

    console.log('currentUser', currentUser);

    if (currentUser.role === 'operator') {
        return <Outlet />;
    } else if (currentUser.role === 'owner') {
        return <Outlet />;
    } else {
        alert('Access Denied !');
        return <Navigate to={pathname.substring(0, pathname.lastIndexOf('/'))} />;
    }
}
