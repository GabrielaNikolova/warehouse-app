import { useCallback, useEffect, useState } from 'react';

import { WarehouseList } from './WarehousesList.static';
import { delWarehouse, getAll } from '../../../services/warehouseService';

function getWarehouses() {
    const [warehousesList, setWarehousesList] = useState<WarehouseList[]>([]);

    const fetchData = useCallback(async () => {
        const warehouses = await getAll();
        if (warehouses) {
            console.log('in', warehouses);
            warehouses.map((w) => {
                if (w.created !== undefined) {
                    const dateTime = new Date(w.created).toLocaleDateString();
                    // const date = new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()).toDateString();
                    // console.log('date', date);

                    return (w.created = dateTime);
                }
            });
            setWarehousesList(warehouses);
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { warehouses: warehousesList, setWarehousesList, fetchData };
}

function deleteWarehouse() {
    const { setWarehousesList } = getWarehouses();

    const deleteW = async (id: string) => {
        const deleted = await delWarehouse(id);

        if (deleted) {
            setWarehousesList((prev) => {
                return prev.filter((warehouse) => warehouse.id !== deleted.id);
            });
        }
    };
    return { deleteW };
}

export { getWarehouses, deleteWarehouse };
