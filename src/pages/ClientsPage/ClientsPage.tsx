import FormButton from '../../components/Common_components/Button/Button';
import { Container } from '../../components/Common_components/Container.style';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../statics/routes';
import ClientsList from './ClientsList/ClientsList';

export default function Clients() {
    const navigate = useNavigate();

    return (
        <Container className="clients-container">
            <FormButton
                className={'create-btn'}
                type={'button'}
                btnText={'Create New Client'}
                onClick={() => {
                    navigate(routes.clientsCreate);
                }}
            />
            <ClientsList />
        </Container>
    );
}
