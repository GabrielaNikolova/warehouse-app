import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { OperationCreate, OperationCreateShema, OperationCreateValues } from './OperationsCreateForm.static';
import { create } from '../../../services/operationService';
import { Product } from '../../ProductsPage/ProductsTable/ProductsTable.static';
import { useCallback, useEffect, useState } from 'react';
import { Client } from '../../ClientsPage/ClientsList/ClientsList.static';
import { Warehouse } from '../../WarehousePage/WarehousesList/WarehouseCard/WarehouseCard.static';
import { getAll as getProducts } from '../../../services/productService';
import { getAll as getClients } from '../../../services/clientService';
import { getAll as getWarehouses } from '../../../services/warehouseService';

function createOperation() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Product[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [warehouses, setWarehouses] = useState<Warehouse[]>([]);

    const getData = useCallback(async () => {
        try {
            const productsData = await getProducts();
            const clientsData = await getClients();
            const warehousesData = await getWarehouses();

            productsData ? setProducts(productsData) : undefined;
            console.log('productsData', productsData);

            clientsData ? setClients(clientsData) : undefined;
            console.log('clientsData', clientsData);

            warehousesData ? setWarehouses(warehousesData) : undefined;
            console.log('warehousesData', warehousesData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }, []);

    useEffect(() => {
        getData();
        console.log('p', products);
    }, [getData]);

    // useEffect(() => {
    //     console.log('p', products);
    // }, [products]);

    const formik = useFormik<OperationCreateValues>({
        initialValues: {
            type: '',
            date: '',
            client: '',
            warehouse: '',
            warehouseIn: '',
            products: [],
            error: '',
        },
        validationSchema: OperationCreateShema,

        onSubmit: async (values: OperationCreateValues, { setFieldError, setSubmitting, resetForm }) => {
            try {
                console.log('VALUES', values);

                const createdOperation = await create(values);

                if (createdOperation.error) {
                    throw new Error(createdOperation.error);
                } else {
                    alert('Operation created successfully!');
                    resetForm();
                    navigate('/operations');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, getData, products, clients, warehouses };
}



export { createOperation };
