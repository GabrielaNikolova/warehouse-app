import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { Container } from '../../../components/Common_components/Container.style';
import { createWarehouse } from './WarehouseCreateForm.logic';
import { WarehouseCreateFormStyled } from './WarehouseCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import SelectField from '../../../components/Common_components/SelectField/SelectField';
import { warehouseTypes } from './WarehouseCreateForm.static';
import SelectStyle from '../../../components/Common_components/SelectField/SelectField.style';
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
                    label="Warehouse Name"
                    name="name"
                    placeholder="Please enter warehouse's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <SelectField
                    type="select"
                    label="Warehouse Type"
                    name="type"
                    placeholder="Please enter warehouse type"
                    onChange={formik.handleChange}
                    options={warehouseTypes}
                />
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </WarehouseCreateFormStyled>
        </Container>
    );
}
