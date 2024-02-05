import { useAuth } from '../../../contexts/AuthContext/AuthContext';
import { useFormik } from 'formik';
import { RegisterShema, UserRegister } from './RegisterForm.static';

export default function register() {
    const { registerUser } = useAuth();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: '',
        },
        validationSchema: RegisterShema,

        onSubmit: async (values: UserRegister, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const user = await registerUser(values);
                console.log('VALS', values);

                console.log('ERR', user);

                if (user?.error) {
                    throw new Error(user.error);
                } else {
                    alert('User is registered successfully!');
                    resetForm();
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };

    // const usernameInput = useInput('');
    // const emailInput = useInput('');
    // const passwordInput = useInput('');
    // const confirmPasswordInput = useInput('');

    // const { registerUser } = useAuth();

    // const handleSubmit = async (e: FormEvent) => {
    //     e.preventDefault();

    //     await registerUser(usernameInput.value, emailInput.value, passwordInput.value);
    // };

    // return {
    //     username: usernameInput,
    //     email: emailInput,
    //     password: passwordInput,
    //     confirmPassword: confirmPasswordInput,
    //     handleSubmit: handleSubmit,
    // };
}
