import { Warehouse } from '../pages/WarehousePage/WarehouseCreate/WarehouseCreateForm.static';
import * as request from './fetchService';

const baseUrl = 'http://localhost:3000/warehouse';

const getAll = async (): Promise<Warehouse[]> => {
    return await request.get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<Warehouse> => {
    return await request.get(`${baseUrl}/${id}`, {});
};

const create = async ({ name, type }: Warehouse): Promise<Warehouse> => {
    return await request.post(`${baseUrl}/create`, { name, type });
};

const update = async ({ id, name, type }: Warehouse): Promise<Warehouse> => {
    return await request.post(`${baseUrl}/${id}`, { name, type });
};

const delWarehouse = async (id: string) => {
    return await request.del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delWarehouse };
