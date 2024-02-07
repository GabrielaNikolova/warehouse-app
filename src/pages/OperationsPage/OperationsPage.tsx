import FormButton from '../../components/Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../statics/routes';
import { Container } from '../../components/Common_components/Global.style';
import OperationsTable from './OperationsTable/OperationsTable';

export default function Operations() {
    const navigate = useNavigate();

    return (
        <Container className="clients-container">
            <FormButton
                className={'create-btn'}
                type={'button'}
                btnText={'Create New Operation'}
                onClick={() => {
                    navigate(routes.operationsCreate);
                }}
            />
            <OperationsTable />
        </Container>
    );
}
