import FormButton from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../statics/routes';
import { Container } from '../Global.style';

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
