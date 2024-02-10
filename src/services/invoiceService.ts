import { Invoice } from '../pages/InvoicesPage/InvoicesTable/InvoicesTable.static';
import { get, patch, del } from './fetchService';

const baseUrl = 'http://localhost:3000/invoice';

const getAll = async (): Promise<Invoice[]> => {
    return await get(`${baseUrl}`, {});
};

const getById = async (id: string): Promise<Invoice> => {
    return await get(`${baseUrl}/${id}`, {});
};

const getInvoiceByOperationId = async (id: string): Promise<Invoice> => {
    return await get(`${baseUrl}/search?opId=${id}`, {});
};

// const update = async ({ id, name, address, accountablePerson, uic }: Partial<Invoice>): Promise<Invoice> => {
//     return await patch(`${baseUrl}/${id}`, { name, address, accountablePerson, uic });
// };

const delInvoice = async (id: string) => {
    return await del(`${baseUrl}/${id}`, {});
};

export { getAll, getById, getInvoiceByOperationId, delInvoice };
