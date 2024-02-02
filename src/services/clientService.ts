import { Client } from '../pages/ClientsPage/Clients.static';
import * as request from './fetchService';

const baseUrl = 'http://localhost:3000/client';

const getAll = async (): Promise<Client[]> => {
    return await request.get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<Client> => {
    return await request.get(`${baseUrl}/${id}`, {});
};

const create = async ({ name, address, accountablePerson, uic }: Client): Promise<Client> => {
    return await request.post(`${baseUrl}/create`, { name, address, accountablePerson, uic });
};

const update = async ({ id, name, address, accountablePerson, uic }: Client): Promise<Client> => {
    return await request.post(`${baseUrl}/${id}`, { name, address, accountablePerson, uic });
};

const delClient = async (id: string) => {
    console.log('idddd' + id);

    return await request.del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delClient };
