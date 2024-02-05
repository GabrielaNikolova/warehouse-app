import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../../components/Common_components/Button/Button.style';
import { routes } from '../../../statics/routes';

import Card from './ClientsCard/ClientCard';
import { ClientCardStyled } from './ClientsCard/ClientCard.style';

import { ClientsListStyled } from './ClientsList.style';
import { deleteClient, getClients } from './ClientsList.logic';
import { Client } from './ClientsList.static';

function ClientsList() {
    const { clients, fetchData } = getClients();
    //const [clientsData, setClientsData] = useState<Client[]>(clients || []);
    const { deleteC } = deleteClient();
    const navigate = useNavigate();

    // useEffect(() => setClientsData(clients), [clients]);
    // console.log('clients', clients);

    return (
        <ClientsListStyled>
            {clients.map((c: Client) => {
                return (
                    <li key={c.id}>
                        <ClientCardStyled className="card">
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
                                        navigate(`${routes.clients}/${c.id}`, { state: { currentClient: c } });
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
                        </ClientCardStyled>
                    </li>
                );
            })}
        </ClientsListStyled>
    );
}
export default ClientsList;
