import InputField from '../../../components/Common_components/InputField';
import FormButton from '../../../components/Common_components/Button/Button';

import login from './LoginForm.logic';
import { LoginFormStyled, NavLinkLogin } from './LoginForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';

export default function LoginForm() {
    const { formik } = login();
    // const { formik } = createClient();

    return (
        <div className="page-center">
            <LoginFormStyled onSubmit={formik.handleSubmit}>
                <h3 className="form-title">Login Form</h3>
                <InputField
                    type="email"
                    label="Email"
                    name="email"
                    placeholder="Please enter your email"
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email ? (
                    <ErrorMessage>{formik.errors.email}</ErrorMessage>
                ) : null}
                <InputField
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Please enter your password"
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? (
                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                ) : null}
                <FormButton type={'submit'} btnText={'Login'} />
                <NavLinkLogin href={'/register'}>Don't have an account? Register here.</NavLinkLogin>
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </LoginFormStyled>
        </div>
    );
}
