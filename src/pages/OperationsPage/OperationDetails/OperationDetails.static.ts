import { Operation } from '../OperationsTable/OperationsTable.static';

interface ProductForOpDetails {
    id?: string;
    name?: string;
    type?: string;
    unit?: string;
    category?: string;
    quantity?: number;
    price?: number;
    error?: string;
}


interface OperationDetails {
    operation?: Operation;
    products?: ProductForOpDetails[]; 
    error?: string;
}

interface Detail {
    id: string;
    productQuantity: 3;
    productPrice: 15;
    product: string;
    operation: string;
    error?: string;
}

export type { ProductForOpDetails, OperationDetails, Detail };
