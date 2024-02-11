import { useTable } from 'react-table';
import { getReportsClients, getReportsProducts } from './ReportsTable.logic';
import { TableStyled } from './ReportsTable.style';
import { DivFlexStyled } from '../../../components/Common_components/Global.style';

function ReportsTableClients() {
    const { data, columns } = getReportsClients();
    const { isResponsive } = getReportsProducts();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <DivFlexStyled>
            <h3>Clients With Most Orders</h3>
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
                            </tr>
                        );
                    })}
                </tbody>
            </TableStyled>
        </DivFlexStyled>
    );
}

export default ReportsTableClients;
