import { useCallback, useEffect, useState } from 'react';

import { delProduct, getAll } from '../../../services/productService';
import { Product } from './ProductsTable.static';
import { Column } from 'react-table';

function getProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 400);

    const fetchData = useCallback(async () => {
        const products = await getAll();
        if (products) {
            console.log('in', products);
            setProducts(products);
            const columns = [
                {
                    Header: 'Name',
                    accessor: 'name',
                },
                {
                    Header: 'Type',
                    accessor: 'type',
                },
                {
                    Header: 'Unit',
                    accessor: 'unit',
                },
                {
                    Header: 'Category',
                    accessor: 'category',
                },
            ];
            setColumns(columns);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { data: products, columns, setProducts, fetchData, isResponsive };
}

function deleteProduct() {
    const { setProducts } = getProducts();

    const deleteP = async (product: Product) => {

        const id = product.id!;
        
        const deleted = await delProduct(id);

        if (deleted) {
            setProducts((prev) => {
                return prev.filter((product) => product.id !== deleted.id);
            });
        }
    };
    return { deleteP };
}

export { getProducts, deleteProduct };
