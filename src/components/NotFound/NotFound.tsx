import FormButton from '../Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../statics/routes';
import { Container } from '../Common_components/Global.style';

function NotFound() {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Page not found!</h1>
            <FormButton type={'button'} btnText={'Go to Login Page'} onClick={() => navigate(routes.login)} />
        </Container>
    );
}

export default NotFound;
