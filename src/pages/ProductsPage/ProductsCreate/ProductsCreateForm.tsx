import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';

import { createProduct } from './ProductsCreateForm.logic';
import { Option, ProductCreateFormStyled, SelectStyle } from './ProductsCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import { productCategories } from './ProductsCreateForm.static';

import { Field, FormikProvider } from 'formik';
import { Container } from '../../../components/Common_components/Global.style';

export default function ProductCreateForm() {
    const navigate = useNavigate();
    const { formik } = createProduct();

    return (
        <Container className="page-center">
            <ProductCreateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/products')}
                ></FormButton>
                <h3 className="form-title">Create new Product</h3>
                <InputField
                    type="name"
                    label="Name"
                    name="name"
                    placeholder="Please enter product's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <ErrorMessage>{formik.errors.name}</ErrorMessage> : null}
                <InputField
                    type="type"
                    label="Type"
                    name="type"
                    placeholder="Please enter product's type"
                    onChange={formik.handleChange}
                />
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}
                <InputField
                    type="unit"
                    label="Unit"
                    name="unit"
                    placeholder="Please enter product's unit"
                    onChange={formik.handleChange}
                />
                {formik.errors.unit && formik.touched.unit ? <ErrorMessage>{formik.errors.unit}</ErrorMessage> : null}
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Category</label>
                        <Field as="select" id="category" name="category" onChange={formik.handleChange}>
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
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </ProductCreateFormStyled>
        </Container>
    );
}
