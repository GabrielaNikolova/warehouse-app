import Layout from '../components/Layout/Layout';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import UserRoleHOC from '../components/UserRoleHOC/UserRoleHOC';
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
import UserProfile from '../components/UserProfile/UserProfile';

function routes() {
    return [
        {
            element: <Layout />,
            children: [
                { path: route.login, element: <LoginPage /> },
                { path: route.register, element: <RegisterPage /> },
                {
                    path: '/',
                    element: <ProtectedRoute />,
                    private: true,
                    children: [
                        { path: route.dashboard, element: <Reports /> },
                        { path: route.clients, element: <Clients /> },
                        { path: route.warehouses, element: <Warehouses /> },
                        { path: route.products, element: <Products /> },
                        { path: route.operations, element: <Operations /> },
                        { path: route.operationsDetails, element: <OperationDetails /> },
                        { path: route.invoices, element: <Invoices /> },
                        { path: route.invoiceDetails, element: <InvoiceDetails /> },
                        { path: route.logout, element: <Logout /> },
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
            ],
        },
    ];
}

export { routes };
