import { useCallback, useEffect, useState } from 'react';

import { Column } from 'react-table';
import { OperationDetails, ProductForOpDetails } from './OperationDetails.static';
import { useLocation, useNavigate } from 'react-router-dom';
import { getById as getWarehouse } from '../../../services/warehouseService';
import { getById as getProduct } from '../../../services/productService';
import { delOperation, getDetailsByOperationId } from '../../../services/operationService';
import { Operation } from '../OperationsTable/OperationsTable.static';
import { routes } from '../../../statics/routes';
import { Invoice } from '../../InvoicesPage/InvoicesTable/InvoicesTable.static';
import { getInvoiceByOperationId } from '../../../services/invoiceService';

function getOperationDetails() {
    const location = useLocation();
    const operation: Operation = location.state.currentOperation;
    const [operationDetails, setOperationDetails] = useState<OperationDetails>({});
    const [products, setProducts] = useState<ProductForOpDetails[]>([]);
    const [invoice, setInvoice] = useState<Invoice>({});
    const [columns, setColumns] = useState<Column[]>([]);

    const modifyOperation = useCallback(async (operation: Operation) => {
        if (operation.warehouse) {
            const warehouse = await getWarehouse(operation.warehouse);
            if (warehouse) {
                operation.warehouse = warehouse.name;
            }
        }
    }, []);

    useEffect(() => {
        modifyOperation(operation);
    }, [modifyOperation]);

    const getInvoiceByOpId = async () => {
        if (operation.id && operation.type === 'stock picking') {
            const invoiceData = await getInvoiceByOperationId(operation.id);
            if (invoiceData) {
                setInvoice(invoiceData);
            }
        }
    }

    const getProducts = useCallback(async () => {
        const productsInOperation: ProductForOpDetails[] = [];

        if (operation.id) {
            const detailsData = await getDetailsByOperationId(operation.id);
            if (detailsData) {
                for (const detail of detailsData) {
                    const product = await getProduct(detail.product);
                    const modifiedProduct: ProductForOpDetails = {
                        name: product.name,
                        type: product.type,
                        category: product.category,
                        unit: product.unit,
                        quantity: detail.productQuantity,
                        price: detail.productPrice,
                    };
                    if (modifiedProduct) {
                        productsInOperation.push(modifiedProduct);
                    }
                }
            }
        }
        setProducts(productsInOperation);
    }, []);

    useEffect(() => {
        getProducts();
        getInvoiceByOpId();
    }, [getProducts]);

    const createOperationWithDetails = () => {
        const operationWithDetails = {
            operation: operation,
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
        setOperationDetails(operationWithDetails);
    };

    useEffect(() => {
        createOperationWithDetails();
    }, []);

    return { data: products, columns, operation, operationDetails, invoice };
}

function deleteOperation() {
    const navigate = useNavigate();

    const deleteO = async (id: string) => {
        const deleted = await delOperation(id);

        if (deleted) {
            navigate(routes.operations);
        }
    };
    return { deleteO };
}

export { getOperationDetails, deleteOperation };
