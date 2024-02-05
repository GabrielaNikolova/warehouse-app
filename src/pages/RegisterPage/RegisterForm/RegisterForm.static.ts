import * as Yup from 'yup';

interface UserRegister {
    id?: string;
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    role?: string;
    error?: string;
}

const RegisterShema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Username must be minimum 5 characters!')
        .max(20, 'Username is too long!')
        .required('Username is required!'),
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
        .min(5, 'Password must be minimum 5 characters!')
        .max(20, 'Password is too long!')
        .required('Password is required!'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Password must match!')
        .required('Confirm password is required!'),
});

export type { UserRegister };
export { RegisterShema };
