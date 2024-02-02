import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Logout from './components/User/Logout/Logout.logic';
import Clients from './pages/ClientsPage/ClientsPage';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { routes } from './statics/routes';
import { GlobalStyle } from './components/Common_components/Global.style';
import ClientForm from './pages/ClientsPage/ClientForm';
import ClientEditForm from './pages/ClientsPage/ClientEditForm';

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
                    <Route path={routes.clientsCreate} element={<ClientForm />} />
                    <Route path={routes.clientsEdit} element={<ClientEditForm />} />
                    <Route path={routes.clients} element={<Clients />} />
                    <Route path={routes.clientsCreate} element={<ClientForm />} />
                    <Route path={routes.clientsEdit} element={<ClientEditForm />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
