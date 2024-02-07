import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage';
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

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path={routes.home} element={<HomePage />} />
                    <Route path={routes.login} element={<LoginPage />} />
                    <Route path={routes.register} element={<RegisterPage />} />
                    <Route path={routes.logout} element={<Logout />} />
                    <Route path={routes.clients} element={<Clients />} />
                    <Route path={routes.clientsCreate} element={<ClientCreateForm />} />
                    <Route path={routes.clientsEdit} element={<ClientUpdateForm />} />
                    <Route path={routes.warehouses} element={<Warehouses />} />
                    <Route path={routes.warehousesCreate} element={<WarehouseCreateForm />} />
                    <Route path={routes.warehousesEdit} element={<WarehouseUpdateForm />} />
                    <Route path={routes.products} element={<Products />} />
                    <Route path={routes.productsCreate} element={<ProductCreateForm />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
