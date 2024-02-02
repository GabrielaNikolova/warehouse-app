import { useNavigate } from 'react-router-dom';
import FormButton from '../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../components/Common_components/Button/Button.style';
import { Container } from '../../components/Common_components/Container.style';
import { routes } from '../../statics/routes';
import Card from '../ClientsPage/ClientCard';
import { getClients, deleteClient } from '../ClientsPage/Clients.logic';
import { Client } from '../ClientsPage/Clients.static';
import { ClientsList, CardStyled } from '../ClientsPage/Clients.style';

export default function Warehouses() {
    const { clients, fetchData } = getClients();
    //const [clientsData, setClientsData] = useState<Client[]>(clients || []);
    const { deleteC } = deleteClient();
    const navigate = useNavigate();

    // useEffect(() => setClientsData(clients), [clients]);
    // console.log('clients', clients);

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
            <ClientsList>
                {clients.map((c: Client) => {
                    return (
                        <li key={c.id}>
                            <CardStyled className="card">
                                <Card
                                    id={c.id}
                                    name={c.name}
                                    address={c.address}
                                    accountablePerson={c.accountablePerson}
                                    uic={c.uic}
                                ></Card>
                                <ButtonsContainer>
                                    <FormButton
                                        className={'edit-btn'}
                                        type={'button'}
                                        btnText={'Edit'}
                                        onClick={() => {
                                            navigate(`${routes.clients}/${c.id}`, {
                                                state: { currentClient: c },
                                            });
                                        }}
                                    />
                                    <FormButton
                                        className={'delete-btn'}
                                        type={'button'}
                                        btnText={'Delete'}
                                        onClick={async () => {
                                            await deleteC(c.id!);
                                            fetchData();
                                        }}
                                    />
                                </ButtonsContainer>
                            </CardStyled>
                        </li>
                    );
                })}
            </ClientsList>
        </Container>
    );
}
