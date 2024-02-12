import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import NotFound from '../NotFound/NotFound';
import { ErrorBoundary } from 'react-error-boundary';
import { routes } from '../../statics/routes';

export default function Layout() {
    return (
        <>
            <ErrorBoundary FallbackComponent={NotFound} onReset={() => (location.href = routes.dashboard)}>
                {/* <ErrorBoundary hasError={false} setHasError={function (): void {}}> */}
                <Header />
                <Outlet />
            </ErrorBoundary>
            {/* </ErrorBoundary> */}
        </>
    );
}
