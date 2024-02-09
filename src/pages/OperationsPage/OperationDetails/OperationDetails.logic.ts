import { useCallback, useEffect, useState } from 'react';

import { Column } from 'react-table';
import { OperationDetails, ProductForOpDetails } from './OperationDetails.static';
import { useLocation, useNavigate } from 'react-router-dom';
import { getById as getWarehouse } from '../../../services/warehouseService';
import { getById as getProduct } from '../../../services/productService';
import { getDetailsByOperationId } from '../../../services/operationService';
import { Operation } from '../OperationsTable/OperationsTable.static';

function getOperationDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const operation: Operation = location.state.currentOperation;
    const [operationDetails, setOperationDetails] = useState<OperationDetails>({});
    const [products, setProducts] = useState<ProductForOpDetails[]>([]);
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

    return { data: products, columns, operation, operationDetails };
}

// function deleteOperation() {
//     const { setProducts } = getProducts();

//     const deleteP = async (product: Product) => {

//         const id = product.id!;

//         const deleted = await delProduct(id);

//         if (deleted) {
//             setProducts((prev) => {
//                 return prev.filter((product) => product.id !== deleted.id);
//             });
//         }
//     };
//     return { deleteP };
// }

// export { getOperationDetails, deleteOperation };
export { getOperationDetails };
