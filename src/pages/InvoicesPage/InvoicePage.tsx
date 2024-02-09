import { Container } from '../../components/Common_components/Global.style';
import InvoicesTable from './InvoicesTable/InvoicesTable';

export default function Invoices() {
    return (
        <Container className="clients-container">
            <h2>Invoices</h2>
            <InvoicesTable />
        </Container>
    );
}
