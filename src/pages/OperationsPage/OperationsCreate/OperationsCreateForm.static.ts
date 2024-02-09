import * as Yup from 'yup';
interface OperationCreateValues {
    type: string;
    date: string;
    client: string;
    warehouse: string;
    warehouseIn?: string;
    products: Array<{
        product: string;
        productQuantity: number;
        productPrice: number;
    }>;
    error?: string;
}

interface ProductForOperation {
    id: string;
    name: string;
    category: string;
}

interface WarehouseForOperation {
    id: string;
    name: string;
    type: string;
}

interface ClientForOperation {
    id: string;
    name: string;
}

interface OperationCreate {
    type: string;
    date: string;
    client: string;
    warehouse: string;
    warehouseIn?: string;
    products: Array<{
        product: string;
        productQuantity: number;
        productPrice: number;
    }>;
    error?: string;
}

const operationTypes = [
    { value: 'delivery', label: 'delivery' },
    { value: 'stock picking', label: 'stock picking' },
    { value: 'transfer', label: 'transfer' },
];

const OperationCreateShema = Yup.object().shape({
    type: Yup.string().required('Please select operation type'),
    date: Yup.date().required('Please select a date'),
    client: Yup.string().required('Please select a client'),
    warehouse: Yup.string().required('Please select a warehouse'),
    warehouseIn: Yup.string().when('type', {
        is: (type: string) => type === 'transfer',
        then: () => Yup.string().required('Please select a destination warehouse'),
        otherwise: () => Yup.string().notRequired(),
    }),
    products: Yup.array()
        .of(
            Yup.object().shape({
                product: Yup.string().required('Please select a product'),
                productQuantity: Yup.number().required('Please enter quantity'),
                productPrice: Yup.number().required('Please enter price'),
            }),
        )
        .required('Please add at least one product')
        .min(1, 'Please add at least one product'),
});

export type { OperationCreateValues, ProductForOperation, WarehouseForOperation, OperationCreate, ClientForOperation };
export { OperationCreateShema, operationTypes };
