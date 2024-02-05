import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { Container } from '../../../components/Common_components/Container.style';

import { createClient } from './ClientCreateForm.logic';
import { ClientCreateFormStyled } from './ClientCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';

export default function ClientCreateForm() {
    const navigate = useNavigate();
    const { formik } = createClient();

    return (
        <Container className="page-center">
            <ClientCreateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/clients')}
                ></FormButton>
                <h3 className="form-title">Create new Client</h3>
                <InputField
                    type="name"
                    label="Company Name"
                    name="name"
                    placeholder="Please enter company's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <InputField
                    type="address"
                    label="Address"
                    name="address"
                    placeholder="Please enter address"
                    onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address ? (
                    <ErrorMessage>{formik.errors.address}</ErrorMessage>
                ) : null}
                <InputField
                    type="accountablePerson"
                    label="Accountable Person"
                    name="accountablePerson"
                    placeholder="Please enter accountable person"
                    onChange={formik.handleChange}
                />
                {formik.errors.accountablePerson && formik.touched.accountablePerson ? (
                    <ErrorMessage>{formik.errors.accountablePerson}</ErrorMessage>
                ) : null}
                <InputField
                    type="uic"
                    label="UIC"
                    name="uic"
                    placeholder="Please enter company's uic"
                    onChange={formik.handleChange}
                />
                {formik.errors.uic && formik.touched.uic ? <ErrorMessage>{formik.errors.uic}</ErrorMessage> : null}
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </ClientCreateFormStyled>
        </Container>
    );
}
