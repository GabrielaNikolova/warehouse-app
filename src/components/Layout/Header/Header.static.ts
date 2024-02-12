const navItems = [
    { name: 'Dashboard', to: '/reports', private: true },
    { name: 'Clients', to: '/clients', private: true },
    { name: 'Warehouses', to: '/warehouses', private: true },
    { name: 'Products', to: '/products', private: true },
    { name: 'Operations', to: '/operations', private: true },
    { name: 'Invoices', to: '/invoices', private: true },
    { name: 'Login', to: '/login', private: false },
    { name: 'Register', to: '/register', private: false },
];

interface NavBarProps {
    navItems: Array<{ name: string; to: string; private: boolean }>;
}

export { navItems };
export type { NavBarProps };
