import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { create } from '../../../services/warehouseService';
import {  Warehouse, WarehouseCreateShema } from './WarehouseCreateForm.static';

function createWarehouse() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            error: '',
        },
        validationSchema: WarehouseCreateShema,

        onSubmit: async (values: Warehouse, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const createdWarehouse = await create(values);

                if (createdWarehouse.error) {
                    throw new Error(createdWarehouse.error);
                } else {
                    alert('Warehouse created successfully!');
                    resetForm();
                    navigate('/warehouses');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
}

export { createWarehouse };
