import { Warehouse } from '../pages/WarehousePage/WarehouseCreate/WarehouseCreateForm.static';
import { WarehouseList } from '../pages/WarehousePage/WarehousesList/WarehousesList.static';
import { get,post, patch, del } from './fetchService';

const baseUrl = 'http://localhost:3000/warehouse';

const getAll = async (): Promise<WarehouseList[]> => {
    return await get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<WarehouseList> => {
    return await get(`${baseUrl}/${id}`, {});
};

const create = async ({ name, type }: Warehouse): Promise<Warehouse> => {
    return await post(`${baseUrl}/create`, { name, type });
};

const update = async ({ id, name, type }: Warehouse): Promise<Warehouse> => {
    return await patch(`${baseUrl}/${id}`, { name, type });
};

const delWarehouse = async (id: string) => {
    return await del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delWarehouse };
