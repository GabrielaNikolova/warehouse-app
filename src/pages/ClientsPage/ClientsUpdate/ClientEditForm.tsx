import FormButton from '../../../components/Common_components/Button/Button';
import { Container } from '../../../components/Common_components/Container.style';
import InputField from '../../../components/Common_components/InputField';
import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import editClient from './ClientUpdateForm.logic';
import { ClientUpdateFormStyled } from './ClientUpdateForm.style';

export default function ClientUpdateForm() {
    const navigate = useNavigate();
    const { formik } = editClient();

    // //const [client, setClient] = useState(location.state.currentClient);

    // // const handleChange = (e) => {
    // //     const name = e.target.name;
    // //     const value = e.target.value;
    // //     console.log('?', name);
    // //     console.log('?', value);

    // // setClient((prevClient) => ({ ...prevClient}));
    // //     console.log('1', client);
    // // };

    return (
        <Container className="page-center">
            <ClientUpdateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/clients')}
                ></FormButton>
                <h3 className="form-title">Update Client</h3>
                <InputField type="hidden" name="id" value={formik.values.id} readonly={true} />
                <InputField
                    type="name"
                    label="Company Name"
                    name="name"
                    placeholder="Please enter company's name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <InputField
                    type="address"
                    label="Address"
                    name="address"
                    placeholder="Please enter address"
                    value={formik.values.address}
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
                    value={formik.values.accountablePerson}
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
                    value={formik.values.uic}
                    onChange={formik.handleChange}
                />
                {formik.errors.uic && formik.touched.uic ? <ErrorMessage>{formik.errors.uic}</ErrorMessage> : null}
                <FormButton type={'submit'} btnText={'Update'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </ClientUpdateFormStyled>
        </Container>
    );
}
