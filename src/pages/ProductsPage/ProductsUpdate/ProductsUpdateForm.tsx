import FormButton from '../../../components/Common_components/Button/Button';

import { useNavigate } from 'react-router-dom';

import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import { Option, ProductUpdateFormStyled, SelectStyle } from './ProductsUpdateForm.style';
import InputField from '../../../components/Common_components/InputField/InputField';
import { Field, FormikProvider } from 'formik';
import { productCategories } from './ProductsUpdateForm.static';
import editProduct from './ProductsUpdateForm.logic';
import { Container } from '../../../components/Common_components/Global.style';

export default function ProductUpdateForm() {
    const navigate = useNavigate();
    const { formik } = editProduct();

    return (
        <Container className="page-center">
            <ProductUpdateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/products')}
                ></FormButton>
                <h3 className="form-title">Update Product</h3>
                <InputField
                    type="name"
                    label="Name"
                    name="name"
                    placeholder="Please enter product's name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <InputField
                    type="type"
                    label="Type"
                    name="type"
                    placeholder="Please enter product's type"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                />
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}
                <InputField
                    type="unit"
                    label="Unit"
                    name="unit"
                    placeholder="Please enter product's unit"
                    value={formik.values.unit}
                    onChange={formik.handleChange}
                />
                {formik.errors.unit && formik.touched.unit ? <ErrorMessage>{formik.errors.unit}</ErrorMessage> : null}
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Category</label>
                        <Field
                            as="select"
                            id="category"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                        >
                            <Option value="" label="Please enter category" />
                            {productCategories.map((option) => (
                                <Option key={option.value} value={option.value}>
                                    {option.label}
                                </Option>
                            ))}
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                {formik.errors.category && formik.touched.category ? (
                    <ErrorMessage>{formik.errors.category}</ErrorMessage>
                ) : null}
                <FormButton type={'submit'} btnText={'Update'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </ProductUpdateFormStyled>
        </Container>
    );
}
