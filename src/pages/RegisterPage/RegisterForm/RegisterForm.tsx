import InputField from '../../../components/Common_components/InputField';
import FormButton from '../../../components/Common_components/Button/Button';
import register from './RegisterForm.logic';
import { NavLinkRegister, RegisterFormStyled } from './RegisterForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';

export default function RegisterForm() {
    const { formik } = register();

    return (
        <div className="page-center">
            <RegisterFormStyled onSubmit={formik.handleSubmit}>
                <h3 className="form-title">Register Form</h3>
                <InputField
                    type="username"
                    label="Username"
                    name="username"
                    placeholder="Please enter your username"
                    onChange={formik.handleChange}
                />
                {formik.errors.username && formik.touched.username ? (
                    <ErrorMessage>{formik.errors.username}</ErrorMessage>
                ) : null}
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
                <InputField
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Please re-enter your password"
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
                ) : null}
                <FormButton type={'submit'} btnText={'Register'} />
                <NavLinkRegister href={'/login'}>Already have an account? Log in here.</NavLinkRegister>
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </RegisterFormStyled>
        </div>
    );
}
