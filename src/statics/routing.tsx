import Layout from '../components/Common_components/Layout/Layout';
import NotFound from '../components/Common_components/NotFound/NotFound';
import ProtectedRoute from '../components/Common_components/ProtectedRoute/ProtectedRoute';
import UserRoleHOC from '../components/Common_components/UserRoleHOC/UserRoleHOC';
import Logout from '../components/Logout/Logout.logic';
import ClientCreateForm from '../pages/ClientsPage/ClientsCreate/ClientCreateForm';
import Clients from '../pages/ClientsPage/ClientsPage';
import ClientUpdateForm from '../pages/ClientsPage/ClientsUpdate/ClientUpdateForm';
import InvoiceDetails from '../pages/InvoicesPage/InvoiceDetails/InvoiceDetails';
import Invoices from '../pages/InvoicesPage/InvoicePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import OperationDetails from '../pages/OperationsPage/OperationDetails/OperationDetails';
import OperationsCreateForm from '../pages/OperationsPage/OperationsCreate/OperationsCreateForm';
import Operations from '../pages/OperationsPage/OperationsPage';
import OperationsUpdateForm from '../pages/OperationsPage/OperationsUpdate/OperationsUpdateForm';
import ProductCreateForm from '../pages/ProductsPage/ProductsCreate/ProductsCreateForm';
import Products from '../pages/ProductsPage/ProductsPage';
import ProductUpdateForm from '../pages/ProductsPage/ProductsUpdate/ProductsUpdateForm';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import Reports from '../pages/ReportsPage/ReportsPage';
import WarehouseCreateForm from '../pages/WarehousePage/WarehouseCreate/WarehouseCreateForm';
import WarehouseUpdateForm from '../pages/WarehousePage/WarehouseUpdate/WarehouseUpdateForm';
import Warehouses from '../pages/WarehousePage/WarehousesPage';
import { routes as route } from './routes';

function routes() {
    return [
        {
            element: <Layout />,
            children: [
                { path: route.login, element: <LoginPage />, name: 'Login', private: false },
                { path: route.register, element: <RegisterPage />, name: 'Register', private: false },
                {
                    path: '/',
                    element: <ProtectedRoute />,
                    private: true,
                    children: [
                        { path: route.dashboard, element: <Reports />, name: 'Dashboard' },
                        { path: route.clients, element: <Clients />, name: 'Clients' },
                        { path: route.warehouses, element: <Warehouses />, name: 'Warehouses' },
                        { path: route.products, element: <Products />, name: 'Products' },
                        { path: route.operations, element: <Operations />, name: 'Operations' },
                        { path: route.operationsDetails, element: <OperationDetails /> },
                        { path: route.invoices, element: <Invoices />, name: 'Invoices' },
                        { path: route.invoiceDetails, element: <InvoiceDetails /> },
                        { path: route.logout, element: <Logout />, name: 'Logout' },
                        {
                            path: '/',
                            element: <UserRoleHOC />,
                            children: [
                                { path: route.clientsCreate, element: <ClientCreateForm /> },
                                { path: route.clientsUpdate, element: <ClientUpdateForm /> },
                                { path: route.warehousesCreate, element: <WarehouseCreateForm /> },
                                { path: route.warehousesUpdate, element: <WarehouseUpdateForm /> },
                                { path: route.productsCreate, element: <ProductCreateForm /> },
                                { path: route.productsUpdate, element: <ProductUpdateForm /> },
                                { path: route.operationsCreate, element: <OperationsCreateForm /> },
                                { path: route.operationsUpdate, element: <OperationsUpdateForm /> },
                            ],
                        },
                    ],
                },
                { path: route.notFound, element: <NotFound /> },
            ],
        },
    ];
}

export { routes };
