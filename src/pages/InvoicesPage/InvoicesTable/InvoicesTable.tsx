import { useTable } from 'react-table';
import FormButton from '../../../components/Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../statics/routes';

import { Invoice } from './InvoicesTable.static';
import { TableStyled } from './InvoicesTable.style';
import { getInvoices } from './InvoicesTable.logic';

function InvoicesTable() {
    const { data, columns, isResponsive } = getInvoices();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const navigate = useNavigate();

    return (
        <TableStyled {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        <th></th>
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}>
                                    {isResponsive
                                        ? [`${cell.render('Header')}: `, cell.render('Cell')]
                                        : cell.render('Cell')}
                                </td>
                            ))}
                            <td>
                                <FormButton
                                    className={'edit-btn'}
                                    type={'button'}
                                    btnText={'Details'}
                                    onClick={() => {
                                        const invoice: Invoice = row.original;
                                        console.log(invoice);

                                        navigate(`${routes.invoices}/details/${invoice.id}`, {
                                            state: { currentInvoice: row.original },
                                        });
                                    }}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </TableStyled>
    );
}

export default InvoicesTable;
