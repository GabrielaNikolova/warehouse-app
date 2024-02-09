
import { Client } from '../pages/ClientsPage/ClientsList/ClientsList.static';
import { get, post, patch, del } from './fetchService';

const baseUrl = 'http://localhost:3000/client';

const getAll = async (): Promise<Client[]> => {
    return await get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<Client> => {
    return await get(`${baseUrl}/${id}`, {});
};

const create = async ({ name, address, accountablePerson, uic }: Client): Promise<Client> => {
    return await post(`${baseUrl}/create`, { name, address, accountablePerson, uic });
};

const update = async ({ id, name, address, accountablePerson, uic }: Partial<Client>): Promise<Client> => {
    return await patch(`${baseUrl}/${id}`, { name, address, accountablePerson, uic });
};

const delClient = async (id: string) => {
    console.log('ID' + id);

    return await del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delClient };
