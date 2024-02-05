import { update } from '../../../services/clientService';

import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { merge } from 'lodash';
import { Client, ClientEditShema } from './ClientUpdateForm.static';

function editClient() {
    const navigate = useNavigate();
    const location = useLocation();
    const client: Client = location.state.currentClient;

    console.log('gaby', { ...client });

    const formik = useFormik({
        initialValues: {
            id: client.id,
            name: client.name,
            address: client.address,
            accountablePerson: client.accountablePerson,
            uic: client.uic,
            error: client.error,
        },
        validationSchema: ClientEditShema,

        onSubmit: async (values: Client, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const vals = Object.entries(values)
                    .map((v) => {
                        for (const c of Object.entries(formik.initialValues)) {
                            if (v[0] === c[0]) {
                                return v[0] === 'id' ? { [v[0]]: v[1] } : v[1] !== c[1] ? { [v[0]]: v[1] } : undefined;
                            }
                        }
                    })
                    .filter((v) => v !== undefined);

                console.log('VALS', vals);

                const updated = merge({}, ...vals);
                console.log('UPDATED', updated);

                const updateClient = await update(updated);

                console.log('CLIENT:', updateClient);
                if (updateClient.error) {
                    throw new Error(updateClient.error);
                } else {
                    alert('Client updated successfully!');
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

export default editClient;
