 const navItems = [
    //{ name: 'Home', to: '/', private: false },TODO MAKE WELCOME PAGE
    { name: 'Home', to: '/', private: false },
    { name: 'Clients', to: '/clients', private: true },
    { name: 'Warehouses', to: '/warehouses', private: true },
    { name: 'Products', to: '/products', private: true },
    { name: 'Operations', to: '/operations', private: true },
    { name: 'Invoices', to: '/invoices', private: true },
    { name: 'Login', to: '/login', private: false },
    { name: 'Register', to: '/register', private: false },
    { name: 'Log out', to: '/logout', private: true },
];

interface NavBarProps {
    navItems: Array<{ name: string; to: string }>;
}

export { navItems };
export type { NavBarProps };
