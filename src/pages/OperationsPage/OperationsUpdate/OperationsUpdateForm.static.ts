import * as Yup from 'yup';
interface OperationUpdateValues {
    id: string;
    type?: string;
    date?: string;
    client?: string;
    warehouse?: string;
    products: ModifiedProduct[];
    error?: string;
}

interface ProductForOperation {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

interface ModifiedProduct {
    name: string;
    product: string;
    productQuantity: number;
    productPrice: number;
}

interface OperationUpdate {
    id: string;
    type: string;
    date: string;
    client: string;
    warehouse: string;
    error?: string;
}

const OperationUpdateShema = Yup.object().shape({
    date: Yup.date().required('Please select a date'),
    client: Yup.string().required('Please select a client'),
    products: Yup.array().of(
        Yup.object().shape({
            productPrice: Yup.number().required('Please enter price'),
        }),
    ),
});

export type { OperationUpdateValues, OperationUpdate, ProductForOperation, ModifiedProduct };
export { OperationUpdateShema };
