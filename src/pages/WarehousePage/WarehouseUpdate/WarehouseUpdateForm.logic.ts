import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { merge } from 'lodash';
import { Warehouse, WarehouseUpdateShema } from './WarehouseUpdateForm.static';
import { update } from '../../../services/warehouseService';

function editWarehouse() {
    const navigate = useNavigate();
    const location = useLocation();
    const warehouse: Warehouse = location.state.currentWarehouse;

    console.log('gaby', { ...warehouse });

    const formik = useFormik({
        initialValues: {
            id: warehouse.id,
            name: warehouse.name,
            type: warehouse.type,
            error: warehouse.error,
        },
        validationSchema: WarehouseUpdateShema,

        onSubmit: async (values: Warehouse, { setFieldError, setSubmitting, resetForm }) => {
            try {
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
                    navigate('/warehouses');
                    return;
                }

                const updated = merge({}, ...vals);

                const updateWarehouse = await update(updated);

                if (updateWarehouse.error) {
                    throw new Error(updateWarehouse.error);
                } else {
                    alert('Warehouse updated successfully!');
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

export default editWarehouse;
