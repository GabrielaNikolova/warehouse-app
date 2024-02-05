import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { Container } from '../../../components/Common_components/Container.style';
import { createWarehouse } from './WarehouseCreateForm.logic';
import { WarehouseCreateFormStyled } from './WarehouseCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import { Field } from 'formik';

export default function WarehouseCreateForm() {
    const navigate = useNavigate();
    const { formik } = createWarehouse();

    return (
        <Container className="page-center">
            <WarehouseCreateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/warehouses')}
                ></FormButton>
                <h3 className="form-title">Create new Warehouse</h3>
                <InputField
                    type="name"
                    label="Warehouse Name"
                    name="name"
                    placeholder="Please enter warehouse's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <Field
                    type="select"
                    label="Warehouse type"
                    name="type"
                    placeholder="Please enter type"
                    onChange={formik.handleChange}
                >
                    <option value="solid">Solid</option>
                    <option value="liquid">Liquid</option>
                </Field>
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </WarehouseCreateFormStyled>
        </Container>
    );
}
