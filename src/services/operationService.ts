import {
    OperationCreate,
    OperationCreateValues,
} from '../pages/OperationsPage/OperationsCreate/OperationsCreateForm.static';
import { Operation } from '../pages/OperationsPage/OperationsTable/OperationsTable.static';
import { ProductCreate } from '../pages/ProductsPage/ProductsCreate/ProductsCreateForm.static';
import { Product } from '../pages/ProductsPage/ProductsTable/ProductsTable.static';
import { get, post, patch, del } from './fetchService';

const baseUrl = 'http://localhost:3000/operation';

const getAll = async (): Promise<Operation[]> => {
    return await get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<Operation> => {
    return await get(`${baseUrl}/${id}`, {});
};

const create = async ({
    type,
    date,
    client,
    warehouse,
    warehouseIn,
    products,
}: OperationCreate): Promise<Operation> => {
    return await post(`${baseUrl}/create`, { type, date, client, warehouse, warehouseIn, products });
};

const update = async ({ id, name, type, unit, category }: Product): Promise<Product> => {
    return await patch(`${baseUrl}/${id}`, { name, type, unit, category });
};

const delOperation = async (id: string) => {
    return await del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delOperation };
