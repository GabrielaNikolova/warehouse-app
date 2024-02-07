import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


import { ProductCreate, ProductCreateShema } from './ProductsCreateForm.static';
import { create } from '../../../services/productService';

function createProduct() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            unit: '',
            category: '',
            error: '',
        },
        validationSchema: ProductCreateShema,

        onSubmit: async (values: ProductCreate, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const createdProduct = await create(values);

                if (createdProduct.error) {
                    throw new Error(createdProduct.error);
                } else {
                    alert('Product created successfully!');
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

export { createProduct };
