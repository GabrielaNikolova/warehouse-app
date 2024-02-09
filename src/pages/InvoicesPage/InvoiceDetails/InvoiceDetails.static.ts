import { Client } from '../../ClientsPage/ClientsList/ClientsList.static';
import { Invoice } from '../InvoicesTable/InvoicesTable.static';

interface ProductForInvoiceDetails {
    id?: string;
    name?: string;
    type?: string;
    unit?: string;
    category?: string;
    quantity?: number;
    price?: number;
    error?: string;
}

interface InvoiceDetails {
    invoice?: Invoice;
    client?: Client;
    invoiceTotal?: number;
    products?: ProductForInvoiceDetails[];
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

export type { ProductForInvoiceDetails, InvoiceDetails, Detail };
