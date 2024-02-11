import { useCallback, useEffect, useState } from 'react';
import { Column } from 'react-table';
import { Invoice } from './InvoicesTable.static';
import { getAll } from '../../../services/invoiceService';

function getInvoices() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [columns, setColumns] = useState<Column[]>([]);
    const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 767);

    const fetchData = useCallback(async () => {
        const invoices = await getAll();

        console.log('in', invoices);
        if (invoices) {
            const modifiedInvoices = await Promise.all(
                invoices.map(async (invoice) => {
                    if (invoice.date !== undefined) {
                        const dateTime = new Date(invoice.date).toLocaleDateString();
                        invoice.date = dateTime;
                    }
                    return invoice;
                }),
            );

            setInvoices(modifiedInvoices);
        }
        const columns = [
            {
                Header: 'Invoice Number',
                accessor: 'number',
            },
            {
                Header: 'Operation number',
                accessor: 'operation',
            },
            {
                Header: 'Date',
                accessor: 'date',
            },
        ];
        setColumns(columns);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const handleResize = () => {
            setIsResponsive(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { data: invoices, columns, isResponsive };
}

export { getInvoices };
