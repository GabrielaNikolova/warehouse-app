import * as Yup from 'yup';
interface ProductUpdate {
    id?: string;
    name?: string;
    type?: string;
    unit?: string;
    category?: string;
    error?: string;
}

const productCategories = [
    { value: 'solid', label: 'solid' },
    { value: 'liquid', label: 'liquid' },
];

const ProductUpdateShema = Yup.object().shape({
    name: Yup.string().min(5, 'Name is too short!').max(100, 'Name is too long!').required('Name is required'),
    category: Yup.mixed()
        .oneOf(['solid', 'liquid'], 'Category must be solid or liquid!')
        .required('Category is required!'),
    type: Yup.string().min(5, 'Type is too short!').max(20, 'Type is too long!').required('Type is required'),
    unit: Yup.string().min(5, 'Unit is too short!').max(20, 'Unit is too long!').required('Unit is required'),
});

export type { ProductUpdate };
export { ProductUpdateShema, productCategories };
