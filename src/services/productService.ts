import { ProductCreate } from '../pages/ProductsPage/ProductsCreate/ProductsCreateForm.static';
import { Product } from '../pages/ProductsPage/ProductsTable/ProductsTable.static';
import { get, post, patch, del } from './fetchService';

const baseUrl = 'http://localhost:3000/product';

const getAll = async (): Promise<Product[]> => {
    return await get(`${baseUrl}`, {});
};

const getAllByCategory = async (category: string): Promise<Product[]> => {
    return await get(`${baseUrl}/search?category=${category}`, { category });
};

const getById = async (id: string): Promise<Product> => {
    return await get(`${baseUrl}/${id}`, {});
};

const create = async ({ name, type, unit, category }: ProductCreate): Promise<ProductCreate> => {
    return await post(`${baseUrl}/create`, { name, type, unit, category });
};

const update = async ({ id, name, type, unit, category }: Product): Promise<Product> => {
    return await patch(`${baseUrl}/${id}`, { name, type, unit, category });
};

const delProduct = async (id: string) => {
    return await del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, create, update, delProduct, getAllByCategory };
