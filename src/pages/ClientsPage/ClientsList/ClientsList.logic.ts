import { useCallback, useEffect, useState } from 'react';
import { delClient, getAll } from '../../../services/clientService';
import { Client } from './ClientsList.static';

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

export { getClients, deleteClient };
