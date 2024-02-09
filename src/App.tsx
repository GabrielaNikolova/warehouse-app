import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Logout from './components/Logout/Logout.logic';
import Clients from './pages/ClientsPage/ClientsPage';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { routes } from './statics/routes';
import { GlobalStyle } from './components/Common_components/Global.style';
import WarehouseCreateForm from './pages/WarehousePage/WarehouseCreate/WarehouseCreateForm';
import ClientCreateForm from './pages/ClientsPage/ClientsCreate/ClientCreateForm';
import Warehouses from './pages/WarehousePage/WarehousesPage';
import WarehouseUpdateForm from './pages/WarehousePage/WarehouseUpdate/WarehouseUpdateForm';
import ClientUpdateForm from './pages/ClientsPage/ClientsUpdate/ClientUpdateForm';
import Products from './pages/ProductsPage/ProductsPage';
import ProductCreateForm from './pages/ProductsPage/ProductsCreate/ProductsCreateForm';
import ProductUpdateForm from './pages/ProductsPage/ProductsUpdate/ProductsUpdateForm';
import DashboardPage from './pages/DashboardPage';
import Operations from './pages/OperationsPage/OperationsPage';
import MultiSelect from './pages/OperationsPage/OperationsCreate/MultiSelect/MultiSelect';
import OperationsCreateForm from './pages/OperationsPage/OperationsCreate/OperationsCreateForm';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path={routes.dashboard} element={<DashboardPage />} />
                    <Route path={routes.login} element={<LoginPage />} />
                    <Route path={routes.register} element={<RegisterPage />} />
                    <Route path={routes.logout} element={<Logout />} />
                    <Route path={routes.clients} element={<Clients />} />
                    <Route path={routes.clientsCreate} element={<ClientCreateForm />} />
                    <Route path={routes.clientsUpdate} element={<ClientUpdateForm />} />
                    <Route path={routes.warehouses} element={<Warehouses />} />
                    <Route path={routes.warehousesCreate} element={<WarehouseCreateForm />} />
                    <Route path={routes.warehousesUpdate} element={<WarehouseUpdateForm />} />
                    <Route path={routes.products} element={<Products />} />
                    <Route path={routes.productsCreate} element={<ProductCreateForm />} />
                    <Route path={routes.productsUpdate} element={<ProductUpdateForm />} />
                    <Route path={routes.operations} element={<Operations />} />
                    <Route path={routes.operationsCreate} element={<OperationsCreateForm />} />
                    <Route path={routes.operationsUpdate} element={<ProductUpdateForm />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
