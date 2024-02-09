import { useTable } from 'react-table';
import FormButton from '../../../components/Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../statics/routes';
import { getOperations } from './OperationsTable.logic';
import { TableStyled } from './OperationsTable.style';
import { Operation } from './OperationsTable.static';

function OperationsTable() {
    const { data, columns } = getOperations();
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
                                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            ))}
                            <td>
                                <FormButton
                                    className={'edit-btn'}
                                    type={'button'}
                                    btnText={'Details'}
                                    onClick={() => {
                                        const operation: Operation = row.original;
                                        navigate(`${routes.operations}/details/${operation.id}`, {
                                            state: { currentOperation: row.original },
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

export default OperationsTable;
