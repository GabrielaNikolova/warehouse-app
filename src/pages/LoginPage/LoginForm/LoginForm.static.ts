import * as Yup from 'yup';

interface User {
    id?: string;
    email?: string;
    password?: string;
    role?: string;
    access_token?: string;
    error?: string;
}

const LoginShema = Yup.object().shape({
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
        .min(5, 'Password must be minimum 5 characters!')
        .max(20, 'Password is too long!')
        .required('Password Required!'),
});

export type { User };
export { LoginShema };
