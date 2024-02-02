import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';

export default function Logout() {
    const { logoutUser } = useAuth();

    useEffect(() => {
        logoutUser();
    }, []);

    return null;
}
