import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { create } from '../../../services/clientService';
import { Client, ClientCreateShema } from './ClientCreateForm.static';

function createClient() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            accountablePerson: '',
            uic: '',
            error: '',
        },
        validationSchema: ClientCreateShema,

        onSubmit: async (values: Client, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const createdClient = await create(values);

                if (createdClient.error) {
                    throw new Error(createdClient.error);
                } else {
                    alert('Client created successfully!');
                    resetForm();
                    navigate('/clients');
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

export { createClient };
