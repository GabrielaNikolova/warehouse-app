import { useCallback, useEffect, useState } from 'react';

import { Operation } from './OperationsTable.static';
import { Column } from 'react-table';
import { getAll } from '../../../services/operationService';
import { getById } from '../../../services/clientService';

function getOperations() {
    const [operations, setOperations] = useState<Operation[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);

    const fetchData = useCallback(async () => {
        const operations = await getAll();

        console.log('in', operations);
        if (operations) {
            const modifiedOperations = await Promise.all(
                operations.map(async (op) => {
                    if (op.date !== undefined) {
                        const dateTime = new Date(op.date).toLocaleDateString();
                        op.date = dateTime;
                    }
                    if (op.client) {
                        const client = await getById(op.client);
                        op.client = client.name;
                    }
                    if (op.isTransfer) {
                        op.isTransfer = 'transfer';
                    }
                    return op;
                }),
            );

            setOperations(modifiedOperations);
            console.log('OP', operations);
        }
        const columns = [
            {
                Header: 'Client',
                accessor: 'client',
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
            {
                Header: 'Number',
                accessor: 'id',
            },
            {
                Header: 'Transfer',
                accessor: 'isTransfer',
            },
        ];
        setColumns(columns);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data: operations, columns, setOperations, fetchData };
}

export { getOperations };
