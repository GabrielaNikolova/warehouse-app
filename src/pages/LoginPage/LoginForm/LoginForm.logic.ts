import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginShema, User } from "./LoginForm.static";

export default function login() {

    const navigate = useNavigate();
    const { loginUser } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            error: '',
        },
        validationSchema: LoginShema,

        onSubmit: async (values: User, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const user = await loginUser(values);
                console.log("VALS", values);
                
                console.log("ERR", user);
                

                if (user?.error) {
                    throw new Error(user.error);
                } else {
                    alert('User logged in successfully!');
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