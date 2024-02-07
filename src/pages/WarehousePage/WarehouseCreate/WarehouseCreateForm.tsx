import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { Container } from '../../../components/Common_components/Container.style';
import { createWarehouse } from './WarehouseCreateForm.logic';
import { Option, SelectStyle, WarehouseCreateFormStyled } from './WarehouseCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import { warehouseTypes } from './WarehouseCreateForm.static';

import { Field, FormikProvider } from 'formik';

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
                    label="Name"
                    name="name"
                    placeholder="Please enter warehouse's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Type</label>
                        <Field as="select" id="type" name="type" onChange={formik.handleChange}>
                            <Option value="" label="Please enter type" />
                            {warehouseTypes.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </WarehouseCreateFormStyled>
        </Container>
    );
}
