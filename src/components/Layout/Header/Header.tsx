import Navbar from './Navbar';
import { Nav, HeaderStyle } from './Header.style';
import { navItems } from './Header.static';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';
import HamburgerMenu from '../HamburgerMenu/HamburgeMenu';
import UserProfile from '../../UserProfile/UserProfile';

export default function Header() {
    const { isAuthenticated } = useAuth();
    return (
        <HeaderStyle>
            <Nav>
                <HamburgerMenu />
                {isAuthenticated ? <UserProfile /> : null}
                <Navbar
                    navItems={
                        isAuthenticated
                            ? navItems.filter((route) => route.private)
                            : navItems.filter((route) => !route.private)
                    }
                />
            </Nav>
        </HeaderStyle>
    );
}
