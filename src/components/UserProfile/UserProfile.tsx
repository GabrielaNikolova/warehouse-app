import { useEffect, useState } from 'react';

import { Div1, Div2, UserMenuStyled } from './UserProfile.style';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';
import { routes } from '../../statics/routes';
import Button from '../Common_components/Button/Button';

export default function UserProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useAuth();
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        setUser(currentUser);
    }, [user]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <UserMenuStyled className="user-menu-container">
            <Div1>
                <Button className={`user ${isOpen ? 'open' : ''}`} onClick={() => toggleMenu()} btnText={'User'} />
            </Div1>
            <Div2 className={`menu ${isOpen ? 'open' : ''}`}>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>role: {user.role}</p>
                <NavLink className={'logout'} to={routes.logout}>
                    {'Logout'}
                </NavLink>
            </Div2>
        </UserMenuStyled>
    );
}
