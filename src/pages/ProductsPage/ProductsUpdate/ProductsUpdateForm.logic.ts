import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { merge } from 'lodash';
import { ProductUpdate, ProductUpdateShema } from './ProductsUpdateForm.static';
import { update } from '../../../services/productService';


function editProduct() {
    const navigate = useNavigate();
    const location = useLocation();
    const product: ProductUpdate = location.state.currentProduct;

    console.log('gaby', { ...product });

    const formik = useFormik({
        initialValues: {
            id: product.id,
            name: product.name,
            type: product.type,
            unit: product.unit,
            category: product.category,
            error: product.error,
        },
        validationSchema: ProductUpdateShema,

        onSubmit: async (values: ProductUpdate, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const vals = Object.entries(values)
                    .map((v) => {
                        for (const w of Object.entries(formik.initialValues)) {
                            if (v[0] === w[0]) {
                                return v[0] === 'id' ? { [v[0]]: v[1] } : v[1] !== w[1] ? { [v[0]]: v[1] } : undefined;
                            }
                        }
                    })
                    .filter((v) => v !== undefined);

                console.log('VALS', vals);

                const updated = merge({}, ...vals);
                console.log('UPDATED', updated);

                const updateProduct = await update(updated);

                console.log('Product:', updateProduct);
                if (updateProduct.error) {
                    throw new Error(updateProduct.error);
                } else {
                    alert('Product updated successfully!');
                    resetForm();
                    navigate('/products');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
}

export default editProduct;
