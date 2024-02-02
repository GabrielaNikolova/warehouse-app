import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { create, delClient, getAll, update } from '../../services/clientService';
import { Client } from './Clients.static';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

function getClients() {
    const [clientList, setClientList] = useState<Client[]>([]);

    const fetchData = useCallback(async () => {
        const clients = await getAll();
        if (clients) {
            console.log('in', clients);
            setClientList(clients);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { clients: clientList, setClientList, fetchData };
}

// function getClientById() {
//     const [currentId, setCurrentId] = useState<string>('');
//     const [client, setClient] = useState<Client>({});

//     // useEffect(() => {
//     //     fetchClientData(currentId);
//     // }, [currentId]);

//     // const fetchClientData = async (currentId:string) => {
//     //     const client = await getById(currentId);
//     //     setClient(client);
//     // };
//     console.log("/////// " + currentId);
//     console.log(',,,,,,,, '+ JSON.stringify(client));

//     return { client, setClient, setCurrentId };
// }

function createClient() {
    const navigate = useNavigate();
    const name = useInput('');
    const address = useInput('');
    const accountablePerson = useInput('');
    const uic = useInput('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const client: Client = {
            name: name.value,
            address: address.value,
            accountablePerson: accountablePerson.value,
            uic: uic.value,
        };

        const createClient = await create(client);
        if (createClient) {
            navigate('/clients');
        }
    };

    return { client: { name, address, accountablePerson, uic }, handleSubmit };
}

function editClient() {
    const navigate = useNavigate();
    const [data, setData] = useState('');

    console.log("1", data);
    

    const name = useInput('');
    const address = useInput('');
    const accountablePerson = useInput('');
    const uic = useInput('');



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const client: Client = {
            name: name.value,
            address: address.value,
            accountablePerson: accountablePerson.value,
            uic: uic.value,
        };
        console.log(client);

        const updateClient = await update(client);
        if (updateClient) {
            navigate('/clients');
        }
    };

    return { handleSubmit, setData };
}

function deleteClient() {
    const { setClientList } = getClients();

    const deleteC = async (id: string) => {
        const deleted = await delClient(id);

        if (deleted) {
            setClientList((prev) => {
                return prev.filter((client) => client.id !== deleted.id);
            });
        }
    };
    return { deleteC };
}

export { getClients, createClient, editClient, deleteClient };
