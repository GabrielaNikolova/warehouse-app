import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import { Field, FieldArray, FormikProvider, getIn } from 'formik';
import { Container } from '../../../components/Common_components/Global.style';
import { OperationUpdateFormStyled, Option, ProductsContainer, SelectStyle } from './OperationsUpdateForm.style';
import editOperation from './OperationsUpdateForm.logic';

export default function OperationsUpdateForm() {
    const navigate = useNavigate();
    const { formik, clients } = editOperation();

    return (
        <Container className="page-center">
            <OperationUpdateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate(`/operations`)}
                ></FormButton>
                <h3 className="form-title">Update Operation</h3>
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Operation Type</label>
                        <Field as="select" id="type" name="type" disabled={true}>
                            <Option value={formik.values.type}>{formik.values.type}</Option>
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                <InputField
                    type="date"
                    id="date"
                    name="date"
                    label="Date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                    placeholder={formik.values.date}
                />
                {formik.errors.date && formik.touched.date ? <ErrorMessage>{formik.errors.date}</ErrorMessage> : null}

                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="client">Client</label>
                        <Field
                            as="select"
                            id={'client'}
                            name="client"
                            onChange={formik.handleChange}
                            value={formik.values.client}
                        >
                            <Option value={formik.values.client}>{formik.values.client}</Option>
                            {clients.map((client) => (
                                <Option key={client.id} value={client.id}>
                                    {client.name}
                                </Option>
                            ))}
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                {formik.errors.client && formik.touched.client ? (
                    <ErrorMessage>{formik.errors.client}</ErrorMessage>
                ) : null}

                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="warehouse">Warehouse</label>
                        <Field
                            as="select"
                            id={'warehouse'}
                            name="warehouse"
                            disabled={true}
                            value={formik.values.warehouse}
                        >
                            <Option value={formik.values.warehouse}>{formik.values.warehouse}</Option>
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <FieldArray
                            name={'products'}
                            render={() => (
                                <>
                                    {...formik.initialValues.products.map((product, index) => (
                                        <ProductsContainer key={index}>
                                            <Field
                                                as="select"
                                                id={`product-${product.name}`}
                                                name={`products[${index}].product`}
                                                disabled={true}
                                                value={formik.initialValues.products[index].name}
                                            >
                                                <Option value={formik.values.products[index].name}>
                                                    {formik.values.products[index].name}
                                                </Option>
                                            </Field>
                                            <InputField
                                                type="number"
                                                name={`products[${index}].productQuantity`}
                                                label="Quantity"
                                                onChange={formik.handleChange}
                                                disabled={true}
                                                value={formik.values.products[index].productQuantity}
                                                defaultValue={formik.values.products[index].productQuantity}
                                            />
                                            <InputField
                                                type="number"
                                                name={`products[${index}].productPrice`}
                                                label="Price"
                                                onChange={formik.handleChange}
                                                value={formik.values.products[index].productPrice}
                                            />
                                            {
                                                <ErrorMessage>
                                                    <Field>
                                                        {() => {
                                                            const error = getIn(
                                                                formik.errors,
                                                                `products[${index}].productPrice`,
                                                            );
                                                            const touch = getIn(
                                                                formik.touched,
                                                                `products[${index}].productPrice`,
                                                            );
                                                            return touch && error ? error : null;
                                                        }}
                                                    </Field>
                                                </ErrorMessage>
                                            }
                                        </ProductsContainer>
                                    ))}
                                </>
                            )}
                        />
                    </SelectStyle>
                    {typeof formik.errors.products === 'string' ? (
                        <ErrorMessage>{formik.errors.products}</ErrorMessage>
                    ) : null}
                </FormikProvider>
                <FormButton type={'submit'} btnText={'Update'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </OperationUpdateFormStyled>
        </Container>
    );
}
