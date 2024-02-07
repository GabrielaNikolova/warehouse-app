import { useTable } from 'react-table';
import FormButton from '../../../components/Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../statics/routes';
import { deleteOperation, getOperations } from './OperationsTable.logic';
import { TableStyled } from './OperationsTable.style';
import { Operation } from './OperationsTable.static';

function OperationsTable() {
    const { data, columns, fetchData } = getOperations();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const { deleteO } = deleteOperation();
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
                                        navigate(`${routes.operations}/${operation.id}`, {
                                            state: { currentOperation: row.original },
                                        });
                                    }}
                                />
                                <FormButton
                                    className={'delete-btn'}
                                    type={'button'}
                                    btnText={'Delete'}
                                    onClick={async () => {
                                        await deleteO(row.original);
                                        fetchData();
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
