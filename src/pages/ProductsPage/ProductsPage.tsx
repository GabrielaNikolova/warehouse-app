import FormButton from '../../components/Common_components/Button/Button';
import { Container } from '../../components/Common_components/Container.style';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../statics/routes';
import ProductsTable from './ProductsTable/ProductsTable';

export default function Products() {
    const navigate = useNavigate();

    return (
        <Container className="clients-container">
            <FormButton
                className={'create-btn'}
                type={'button'}
                btnText={'Create New Product'}
                onClick={() => {
                    navigate(routes.productsCreate);
                }}
            />
            <ProductsTable />
        </Container>
    );
}
