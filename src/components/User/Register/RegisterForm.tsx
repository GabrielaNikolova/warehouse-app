import InputField from '../../Common_components/InputField';
import FormButton from '../../Common_components/Button/Button';
import FormStyled from '../User.style';
import register from './Register.logic';

export default function RegisterForm() {
    const { username, email, password, confirmPassword, handleSubmit } = register();

    return (
        <div className="page-center">
            <FormStyled onSubmit={handleSubmit}>
                <h3 className="form-title">Register Form</h3>
                <InputField
                    type="username"
                    label="Username"
                    name="username"
                    placeholder="Please enter your username"
                    {...username}
                />
                <InputField type="email" label="Email" name="email" placeholder="Please enter your email" {...email} />
                <InputField
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Please enter your password"
                    {...password}
                />
                <InputField
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Please re-enter your password"
                    {...confirmPassword}
                />
                <FormButton type={'submit'} btnText={'Register'} />
            </FormStyled>
        </div>
    );
}
