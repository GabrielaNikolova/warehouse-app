import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext/AuthContext';
import { GlobalStyle } from './components/Common_components/Global.style';
import { routes as routing } from './statics/routing';

function App() {
    const router = createBrowserRouter([...routing()]);
    console.log('ROUTER', router);

    return (
        <AuthProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
