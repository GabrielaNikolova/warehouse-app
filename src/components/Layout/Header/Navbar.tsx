import { NavLink } from 'react-router-dom';
import { NavBarProps } from './Header.static';

export default function Navbar({ navItems }: NavBarProps) {
    return (
        <ul className="nav-links">
            {navItems.map((i) => {
                return (
                    <>
                        <li key={i.name}>
                            <NavLink to={i.to}>{i.name}</NavLink>
                        </li>
                    </>
                );
            })}
        </ul>
    );
}
