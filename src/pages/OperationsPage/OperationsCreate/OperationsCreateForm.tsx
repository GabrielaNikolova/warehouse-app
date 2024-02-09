import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';

import { OperationCreateFormStyled, Option, ProductsContainer, SelectStyle } from './OperationsCreateForm.style';
import ErrorMessage from '../../../components/Common_components/ErrorMessage/ErrorMessage';
import InputField from '../../../components/Common_components/InputField/InputField';
import { operationTypes } from './OperationsCreateForm.static';

import { Field, FieldArray, FieldArrayRenderProps, FormikProvider, getIn } from 'formik';
import { Container } from '../../../components/Common_components/Global.style';
import { createOperation } from './OperationsCreateForm.logic';

export default function OperationsCreateForm() {
    const navigate = useNavigate();
    const { formik, products, clients, warehouses } = createOperation();

    console.log('PRODUCTS', products);
    console.log('CLIENTS', clients);
    console.log('WAREHOUSES', warehouses);

    return (
        <Container className="page-center">
            <OperationCreateFormStyled onSubmit={formik.handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/operations')}
                ></FormButton>
                <h3 className="form-title">Create new Operation</h3>
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="type">Operation Type</label>
                        <Field as="select" id="type" name="type" onChange={formik.handleChange}>
                            <Option value="" label="Please select type" />
                            {operationTypes.map((option) => (
                                <Option
                                    key={option.value}
                                    // value={option.value}
                                >
                                    {option.label}
                                </Option>
                            ))}
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                {formik.errors.type && formik.touched.type ? <ErrorMessage>{formik.errors.type}</ErrorMessage> : null}

                <InputField
                    type="date"
                    id="date"
                    name="date"
                    label="Date"
                    onChange={formik.handleChange}
                    // value={formik.values.date}
                />
                {formik.errors.date && formik.touched.date ? <ErrorMessage>{formik.errors.date}</ErrorMessage> : null}

                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label htmlFor="client">Client</label>
                        <Field as="select" id={'client'} name="client" onChange={formik.handleChange}>
                            <Option value="" label="Please select client" />
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
                        <Field as="select" id={'warehouse'} name="warehouse" onChange={formik.handleChange}>
                            <Option value="" label="Please select warehouse" />
                            {warehouses.map((warehouse) => (
                                <Option key={warehouse.id} value={warehouse.id}>
                                    {`${warehouse.name} - Type: ${warehouse.type}`}
                                </Option>
                            ))}
                        </Field>
                    </SelectStyle>
                </FormikProvider>
                {formik.errors.warehouse && formik.touched.warehouse ? (
                    <ErrorMessage>{formik.errors.warehouse}</ErrorMessage>
                ) : null}

                {formik.values.type === 'transfer' && (
                    <FormikProvider value={formik}>
                        <SelectStyle>
                            <label htmlFor="warehouseIn">Destinstion Warehouse</label>
                            <Field as="select" id={'warehouseIn'} name="warehouseIn" onChange={formik.handleChange}>
                                <Option value="" label="Please select destination warehouse" />
                                {warehouses.map((warehouse) => (
                                    <Option key={warehouse.id} value={warehouse.id}>
                                        {`${warehouse.name} - Type: ${warehouse.type}`}
                                    </Option>
                                ))}
                            </Field>
                        </SelectStyle>
                        {formik.errors.warehouseIn && formik.touched.warehouseIn ? (
                            <ErrorMessage>{formik.errors.warehouseIn}</ErrorMessage>
                        ) : null}
                    </FormikProvider>
                )}

                <FormikProvider value={formik}>
                    <SelectStyle>
                        <FieldArray
                            name={'products'}
                            render={(arrayHelpers: FieldArrayRenderProps) => (
                                <>
                                    {...formik.values.products.map((product, index) => (
                                        <ProductsContainer key={index}>
                                            <Field
                                                as="select"
                                                id={`product-${product.product}`}
                                                name={`products[${index}].product`}
                                                onChange={formik.handleChange}
                                            >
                                                <Option value="" label="Select Product" />
                                                {products.map((productOption) => (
                                                    <Option key={productOption.id} value={productOption.id}>
                                                        {`${productOption.name} - Category:  ${productOption.category}`}
                                                    </Option>
                                                ))}
                                            </Field>

                                            {
                                                <ErrorMessage>
                                                    <Field>
                                                        {() => {
                                                            const error = getIn(
                                                                formik.errors,
                                                                `products[${index}].product`,
                                                            );
                                                            const touch = getIn(
                                                                formik.touched,
                                                                `products[${index}].product`,
                                                            );
                                                            return touch && error ? error : null;
                                                        }}
                                                    </Field>
                                                </ErrorMessage>
                                            }

                                            <InputField
                                                type="number"
                                                name={`products[${index}].productQuantity`}
                                                label="Quantity"
                                                onChange={formik.handleChange}
                                                // value={product.productQuantity}
                                                placeholder="Quantity"
                                            />
                                            {
                                                <ErrorMessage>
                                                    <Field>
                                                        {() => {
                                                            const error = getIn(
                                                                formik.errors,
                                                                `products[${index}].productQuantity`,
                                                            );
                                                            const touch = getIn(
                                                                formik.touched,
                                                                `products[${index}].productQuantity`,
                                                            );
                                                            return touch && error ? error : null;
                                                        }}
                                                    </Field>
                                                </ErrorMessage>
                                            }
                                            <InputField
                                                type="number"
                                                name={`products[${index}].productPrice`}
                                                label="Price"
                                                onChange={formik.handleChange}
                                                // value={product.productPrice}
                                                placeholder="Price"
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
                                            <FormButton
                                                type="button"
                                                btnText={'Remove Product'}
                                                onClick={() => arrayHelpers.remove(index)}
                                            />
                                        </ProductsContainer>
                                    ))}
                                    <FormButton
                                        type="button"
                                        btnText={'Add Product'}
                                        onClick={() =>
                                            arrayHelpers.push({
                                                //formik.setFieldValue('products', [
                                                // ...formik.values.products,
                                                // {
                                                product: { id: '', name: '' },
                                                productQuantity: 0,
                                                productPrice: 0,
                                                // },
                                                //]);
                                            })
                                        }
                                    />
                                </>
                            )}
                        />
                    </SelectStyle>
                    {typeof formik.errors.products === 'string' ? (
                        <ErrorMessage>{formik.errors.products}</ErrorMessage>
                    ) : null}
                </FormikProvider>
                <FormButton type={'submit'} btnText={'Create'} />
                {formik.errors.error ? <ErrorMessage>{formik.errors.error}</ErrorMessage> : null}
            </OperationCreateFormStyled>
        </Container>
    );
}
