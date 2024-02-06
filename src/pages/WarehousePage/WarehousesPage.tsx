import FormButton from '../../components/Common_components/Button/Button';
import { Container } from '../../components/Common_components/Container.style';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../statics/routes';
import WarehousesList from './WarehousesList/WarehousesList';

export default function Warehouses() {
    const navigate = useNavigate();

    return (
        <Container className="clients-container">
            <FormButton
                className={'create-btn'}
                type={'button'}
                btnText={'Create New Warehouse'}
                onClick={() => {
                    navigate(routes.warehousesCreate);
                }}
            />
            <WarehousesList />
        </Container>
    );
}
