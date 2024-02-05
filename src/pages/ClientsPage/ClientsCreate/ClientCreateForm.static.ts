import * as Yup from 'yup';

interface Client {
    id?: string;
    name?: string;
    address?: string;
    accountablePerson?: string;
    uic?: string;
    error?: string;
}

const ClientCreateShema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Name is too short!')
        .max(100, 'Name is too long!')
        .required('Field is required. Please fill it.'),
    address: Yup.string().min(2, 'Address is too short!').max(50, 'Address is too long!'),
    accountablePerson: Yup.string()
        .min(5, `Accountable Person's name is too short!`)
        .max(50, `Accountable Person's name is too long!`)
        .required('Field is required. Please fill it.'),
    uic: Yup.string()
        .min(5, 'UIC is too short!')
        .max(20, 'UIC is too long!')
        .required('Field is required. Please fill it.'),
});

export type { Client };
export { ClientCreateShema };
