import * as Yup from 'yup';

interface Warehouse {
    id?: string;
    name?: string;
    type?: string;
    error?: string;
}

const warehouseTypes = [
    { value: 'solid', label: 'solid' },
    { value: 'liquid', label: 'liquid' },
];

const WarehouseCreateShema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Name is too short!')
        .max(100, 'Name is too long!')
        .required('Field is required. Please fill it.'),
    type: Yup.mixed().oneOf(['solid', 'liquid'], 'Type must be solid or liquid!').required('Type is required!'),
});

export type { Warehouse };
export { WarehouseCreateShema, warehouseTypes };
