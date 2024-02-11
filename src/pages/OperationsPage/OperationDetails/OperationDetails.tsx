import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../../components/Common_components/Button/Button.style';
import { Container } from '../../../components/Common_components/Global.style';
import { TableStyled } from '../OperationsTable/OperationsTable.style';
import { useTable } from 'react-table';
import { deleteOperation, getOperationDetails } from './OperationDetails.logic';
import { OperationDetailsInfoStyled, OperationDetailsStyled } from './OperationDetails.style';
import { routes } from '../../../statics/routes';

export default function OperationDetails() {
    const { data, columns, operation, invoice, isResponsive } = getOperationDetails();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const { deleteO } = deleteOperation();
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
                                            <td>
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
                </div>
                <ButtonsContainer>
                    {operation.type === 'stock picking' && (
                        <FormButton
                            className={'edit-btn'}
                            type={'button'}
                            btnText={'See Invoice'}
                            onClick={() => {
                                navigate(`${routes.invoices}/details/${invoice.id}`, {
                                    state: { currentInvoice: invoice },
                                });
                            }}
                        />
                    )}
                    <FormButton
                        className={'edit-btn'}
                        type={'button'}
                        btnText={'Update'}
                        onClick={() => {
                            navigate(`${routes.operations}/details/update/${operation.id}`, {
                                state: { currentOperation: operation, operationProducts: data },
                            });
                        }}
                    />
                    <FormButton
                        className={'delete-btn'}
                        type={'button'}
                        btnText={'Delete'}
                        onClick={async () => {
                            if (operation.id) {
                                await deleteO(operation.id);
                            }
                        }}
                    />
                </ButtonsContainer>
            </OperationDetailsStyled>
        </Container>
    );
}
