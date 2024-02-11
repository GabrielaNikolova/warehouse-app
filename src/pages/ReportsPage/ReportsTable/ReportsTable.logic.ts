import { useCallback, useEffect, useState } from 'react';
import { BestClient, BestSellingProducts, HighestAvailableProduct } from './ReportsTable.static';
import { Column } from 'react-table';
import { getBestsellingProducts, getClientsWithMostOrders, getHighestAvailability } from '../../../services/reportsService';
import { getById as getProduct } from '../../../services/productService';
import { getById as getClient } from '../../../services/clientService';
import { getById as getWarehouse } from '../../../services/warehouseService';

function getReportsProducts() {
    const [products, setProducts] = useState<BestSellingProducts[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);

    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 400);

    const getBestSelling = useCallback(async () => {
        const products = await getBestsellingProducts();
        if (products) {
            for (const p of products) {
                const productName = await getProduct(p.id);
                if (productName.name) {
                    p.name = productName.name;
                }
            }
            console.log('in', products);
            setProducts(products);
            const columns = [
                {
                    Header: 'Product',
                    accessor: 'name',
                },
                {
                    Header: 'Sold Quantity',
                    accessor: 'quantity',
                },
            ];
            setColumns(columns);
        }
    }, []);
    useEffect(() => {
        getBestSelling();
    }, [getBestSelling]);

    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 400);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { data: products, columns, isResponsive };
}

function getReportsClients() {
    const [clients, setClients] = useState<BestClient[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);

    const getBestClients = useCallback(async () => {
        const clients = await getClientsWithMostOrders();
        if (clients) {
            for (const c of clients) {
                const clientName = await getClient(c.id);
                if (clientName.name) {
                    c.name = clientName.name;
                }
            }
            console.log('in', clients);
            setClients(clients);
            const columns = [
                {
                    Header: 'Client',
                    accessor: 'name',
                },
                {
                    Header: 'Number of Orders',
                    accessor: 'orders',
                },
            ];
            setColumns(columns);
        }
    }, []);
    useEffect(() => {
        getBestClients();
    }, [getBestClients]);
    return { data: clients, columns };
}

function getReportsHighestAvailability() {
    const [highestAvailable, setHighestAvailable] = useState<HighestAvailableProduct[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);

    const getAvailableProducts = useCallback(async () => {
        const available = await getHighestAvailability();
        console.log("available", available);
        
        if (available) {
            for (const a of available) {
                const product = await getProduct(a.product_id);
                if (product.name) {
                    a.product = product.name;
                }
                const warehouse = await getWarehouse(a.warehouse_id);
                if (warehouse.name) {
                    a.warehouse = warehouse.name;
                }
            }
            setHighestAvailable(available);
            console.log(available);
            
            const columns = [
                {
                    Header: 'Product',
                    accessor: 'product',
                },
                {
                    Header: 'Warehouse',
                    accessor: 'warehouse',
                },
                {
                    Header: 'Available Quantity',
                    accessor: 'available_quantity',
                },
            ];
            setColumns(columns);
        }
    }, []);
    useEffect(() => {
        getAvailableProducts();
    }, [getAvailableProducts]);

    return { data: highestAvailable, columns };
}

export { getReportsProducts, getReportsClients , getReportsHighestAvailability};
