import {
    BestClient,
    BestSellingProducts,
    HighestAvailableProduct,
} from '../pages/ReportsPage/ReportsTable/ReportsTable.static';
import { get } from './fetchService';

const baseUrl = 'http://localhost:3000/report';

const getBestsellingProducts = async (): Promise<BestSellingProducts[]> => {
    return await get(`${baseUrl}/bestselling`, {});
};

const getClientsWithMostOrders = async (): Promise<BestClient[]> => {
    return await get(`${baseUrl}/best-client`, {});
};
const getHighestAvailability = async (): Promise<HighestAvailableProduct[]> => {
    return await get(`${baseUrl}/product-per-warehouse`, {});
};

export { getBestsellingProducts, getHighestAvailability, getClientsWithMostOrders };
