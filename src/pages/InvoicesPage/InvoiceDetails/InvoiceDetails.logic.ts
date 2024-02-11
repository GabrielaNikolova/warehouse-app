import { useCallback, useEffect, useState } from 'react';

import { Column } from 'react-table';
import { InvoiceDetails, ProductForInvoiceDetails } from './InvoiceDetails.static';
import { useLocation, useNavigate } from 'react-router-dom';
import { getById as getClient } from '../../../services/clientService';
import { getById as getOperation } from '../../../services/operationService';
import { getById as getProduct } from '../../../services/productService';
import { getDetailsByOperationId } from '../../../services/operationService';
import { routes } from '../../../statics/routes';
import { delInvoice } from '../../../services/invoiceService';
import { Invoice } from '../InvoicesTable/InvoicesTable.static';
import { Client } from '../../ClientsPage/ClientsList/ClientsList.static';

function getInvoiceDetails() {
    const location = useLocation();
    const invoice: Invoice = location.state.currentInvoice;
    const [client, setClient] = useState<Client>({});
    const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetails>({});
    const [invoiceTotal, setInvoiceTotal] = useState<number>(0);
    const [products, setProducts] = useState<ProductForInvoiceDetails[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 767);

    const modifyInvoice = useCallback(async (invoice: Invoice) => {
        if (invoice.operation) {
            const operation = await getOperation(invoice.operation);

            if (operation.client) {
                const client = await getClient(operation.client);
                console.log('client1', client);
                if (client) {
                    setClient(client);
                    console.log('client2', client);
                }
            }
        }
    }, []);

    useEffect(() => {
        modifyInvoice(invoice);
    }, [modifyInvoice]);

    const getProducts = useCallback(async () => {
        const productsInOperation: ProductForInvoiceDetails[] = [];
        let sum = 0;

        if (invoice.operation) {
            const detailsData = await getDetailsByOperationId(invoice.operation);
            if (detailsData) {
                for (const detail of detailsData) {
                    const product = await getProduct(detail.product);
                    const modifiedProduct: ProductForInvoiceDetails = {
                        name: product.name,
                        type: product.type,
                        category: product.category,
                        unit: product.unit,
                        quantity: detail.productQuantity,
                        price: detail.productPrice,
                    };
                    sum += detail.productPrice;
                    if (modifiedProduct) {
                        productsInOperation.push(modifiedProduct);
                    }
                }
            }
        }
        setProducts(productsInOperation);
        setInvoiceTotal(sum);
        console.log('sum', sum);
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const createInvoiceWithDetails = () => {
        const invoiceWithDetails = {
            invoice: invoice,
            client: client,
            invoiceTotal: invoiceTotal,
            products: products,
        };
        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Category',
                accessor: 'category',
            },
            {
                Header: 'Unit',
                accessor: 'unit',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'Price',
                accessor: 'price',
            },
        ];
        setColumns(columns);
        setInvoiceDetails(invoiceWithDetails);
    };

    useEffect(() => {
        createInvoiceWithDetails();
    }, [client]);

    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { data: products, columns, invoiceDetails, invoiceTotal, isResponsive };
}

function deleteInvoice() {
    const navigate = useNavigate();

    const deleteI = async (id: string) => {
        const deleted = await delInvoice(id);

        if (deleted) {
            navigate(routes.invoices);
        }
    };
    return { deleteI };
}

export { getInvoiceDetails, deleteInvoice };
