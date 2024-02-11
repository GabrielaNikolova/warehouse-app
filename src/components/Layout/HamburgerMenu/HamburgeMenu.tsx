import { useCallback, useEffect, useState } from 'react';
import { Bar, Div1, Div2, HamburgerMenuStyled } from './hamburgerMenu.style';
import { navItems } from '../Header/Header.static';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';
import Navbar from '../Header/Navbar';
import { NavLink } from 'react-router-dom';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HamburgerMenuStyled className="hamburger-menu-container">
            <Div1 className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => toggleMenu()}>
                <Bar className="bar"></Bar>
                <Bar className="bar"></Bar>
                <Bar className="bar"></Bar>
            </Div1>
            <Div2 className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {navItems.map((i) => {
                        if (isAuthenticated && i.private) {
                            return (
                                <li key={i.name}>
                                    <NavLink to={i.to}>{i.name}</NavLink>
                                </li>
                            );
                        } else if (!isAuthenticated && !i.private) {
                            return (
                                <li key={i.name}>
                                    <NavLink to={i.to}>{i.name}</NavLink>
                                </li>
                            );
                        }
                    })}
                </ul>
            </Div2>
        </HamburgerMenuStyled>
    );
}
