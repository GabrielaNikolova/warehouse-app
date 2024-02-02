import Navbar from './Navbar';
import { Nav, HeaderStyle } from './Header.style';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { navItems } from './Header.static';

export default function Header() {
    const { isAuthenticated } = useAuth();
    return (
        <HeaderStyle>
            <Nav>
                <Navbar
                    navItems={
                        isAuthenticated
                            ? navItems.filter((route) => route.private)
                            : navItems.filter((route) => !route.private)
                    }
                ></Navbar>
            </Nav>
        </HeaderStyle>
    );
}
