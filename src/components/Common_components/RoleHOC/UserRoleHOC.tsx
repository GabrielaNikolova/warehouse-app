import { ReactNode } from 'react';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';

interface Properties {
    children: ReactNode;
}

export default function UserRoleHOC({ children }: Properties) {
    const { currentUser } = useAuth();

    console.log('user2', currentUser);

    const userRoleAuth = currentUser?.role === 'operator' || currentUser?.role === 'owner';

    return userRoleAuth ? <>{children}</> : null;
}
