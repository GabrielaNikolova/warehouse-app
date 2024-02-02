import InputField from '../../Common_components/InputField';
import FormButton from '../../Common_components/Button/Button';
import FormStyled from '../User.style';
import login from './Login.logic';

export default function LoginForm() {
    const { email, password, handleSubmit } = login();

    return (
        <div className="page-center">
            <FormStyled onSubmit={handleSubmit}>
                <h3 className="form-title">Login Form</h3>
                <InputField type="email" label="Email" name="email" placeholder="Please enter your email" {...email} />
                <InputField
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Please enter your password"
                    {...password}
                />
                <FormButton type={'submit'} btnText={'Login'} />
            </FormStyled>
        </div>
    );
}
