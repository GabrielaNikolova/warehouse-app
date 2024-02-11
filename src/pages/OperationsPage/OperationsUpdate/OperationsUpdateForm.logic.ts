import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { merge } from 'lodash';
import {
    ModifiedProduct,
    OperationUpdate,
    OperationUpdateShema,
    OperationUpdateValues,
    ProductForOperation,
} from './OperationsUpdateForm.static';
import { routes } from '../../../statics/routes';
import { update } from '../../../services/operationService';
import { useCallback, useEffect, useState } from 'react';
import { getAll } from '../../../services/clientService';
import { Client } from '../../ClientsPage/ClientsUpdate/ClientUpdateForm.static';

function editOperation() {
    const navigate = useNavigate();
    const location = useLocation();
    const operation: OperationUpdate = location.state.currentOperation;
    const currentProducts: ProductForOperation[] = location.state.operationProducts;
    const [clients, setClients] = useState<Client[]>([]);
    const [productData, setProductsData] = useState<ModifiedProduct[]>([]);

    const getClients = async () => {
        const data = await getAll();
        if (data) {
            setClients(data);
        }
    };
    useEffect(() => {
        getClients();
    }, []);

    const modifyProducts = useCallback(() => {
        const data = currentProducts.map((p) => {
            const prod = {
                name: p.name,
                product: p.id,
                productQuantity: p.quantity,
                productPrice: p.price,
            };

            return prod;
        });

        setProductsData(data);
    },[]);

    useEffect(() => {
        modifyProducts();
    }, [modifyProducts]);

    useEffect(() => {
    }, [productData]);

    console.log('products', { productData }, 'operation', operation);

    const formik = useFormik({
        initialValues: {
            id: operation.id,
            type: operation.type,
            date: operation.date,
            client: operation.client,
            warehouse: operation.warehouse,
            products: productData,
            error: '',
        },
        validationSchema: OperationUpdateShema,
        enableReinitialize: true,

        
        
        onSubmit: async (values: OperationUpdateValues, { setFieldError, setSubmitting, resetForm }) => {

            try {
                console.log('values', values);

                const vals = Object.entries(values)
                    .map((v) => {
                        for (const w of Object.entries(formik.initialValues)) {
                            if (v[0] === w[0]) {
                                return v[0] === 'id' ? { [v[0]]: v[1] } : v[1] !== w[1] ? { [v[0]]: v[1] } : undefined;
                            }
                        }
                    })
                    .filter((v) => v !== undefined);

                if (vals.length === 1) {
                    navigate(`${routes.operations}`);
                    return;
                }

                const updated = merge({}, ...vals);

                const updateProduct = await update(updated);

                if (updateProduct.error) {
                    throw new Error(updateProduct.error);
                } else {
                    alert('Product updated successfully!');
                    resetForm();
                    navigate(`${routes.operations}`);
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, clients };
}

export default editOperation;
