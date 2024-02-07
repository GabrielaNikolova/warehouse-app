import FormButton from '../../../components/Common_components/Button/Button';

import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import { Option, SelectStyle, WarehouseUpdateFormStyled } from './WarehouseUpdateForm.style';
import InputField from '../../../components/Common_components/InputField/InputField';

import { Field, FormikProvider } from 'formik';
import { warehouseTypes } from './WarehouseUpdateForm.static';
import editWarehouse from './WarehouseUpdateForm.logic';
import { Container } from '../../../components/Common_components/Global.style';

export default function WarehouseUpdateForm() {
    const navigate = useNavigate();
    const { formik } = editWarehouse();

    return (
        <Container className="page-center">
            <WarehouseUpdateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/warehouses')}
                ></FormButton>
                <h3 className="form-title">Update Warehouse</h3>
                <InputField type="hidden" name="id" value={formik.values.id} readonly={true} />
                <InputField
                    type="name"
                    label="Warehouse Name"
                    name="name"
                    placeholder="Please enter warehouse's name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}

                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Warehouse type</label>
                        <Field
                            as="select"
                            id="type"
                            name="type"
                            value={formik.values.type}
                            onChange={formik.handleChange}
                        >
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
                <FormButton type={'submit'} btnText={'Update'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </WarehouseUpdateFormStyled>
        </Container>
    );
}
