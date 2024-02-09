import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../../components/Common_components/Button/Button.style';
import { Container } from '../../../components/Common_components/Global.style';
import { TableStyled } from '../OperationsTable/OperationsTable.style';
import { useTable } from 'react-table';
import { getOperationDetails } from './OperationDetails.logic';
import { OperationDetailsInfoStyled, OperationDetailsStyled } from './OperationDetails.style';

export default function OperationDetails() {
    const { data, columns, operation } = getOperationDetails();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    //const { deleteO } = deleteOperation();
    const navigate = useNavigate();

    return (
        <Container>
            <OperationDetailsStyled>
                <h3>Operation Details</h3>
                <OperationDetailsInfoStyled>
                    <p>Number: {operation.id}</p>
                    <p>Type: {operation.type}</p>
                    <p>Date: {operation.date}</p>
                    <p>Client: {operation.client}</p>
                    <p>Warehouse: {operation.warehouse}</p>
                    <p>Transfer: {operation.isTransfer}</p>
                </OperationDetailsInfoStyled>
                <div>
                    <h4>Products:</h4>
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
                                    </tr>
                                );
                            })}
                        </tbody>
                    </TableStyled>
                </div>
                <ButtonsContainer>
                    <FormButton
                        className={'edit-btn'}
                        type={'button'}
                        btnText={'Update'}
                        onClick={() => {
                            // const operation: Operation = row.original;
                            // navigate(`${routes.operations}/details/${operation.id}`, {
                            //     state: { currentOperation: row.original },
                            // });
                        }}
                    />
                    <FormButton
                        className={'delete-btn'}
                        type={'button'}
                        btnText={'Delete'}
                        onClick={async () => {
                            // await deleteO(row.original);
                            // fetchData();
                        }}
                    />
                </ButtonsContainer>
            </OperationDetailsStyled>
        </Container>
    );
}
