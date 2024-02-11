import FormButton from '../../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../../components/Common_components/Button/Button.style';
import { Container } from '../../../components/Common_components/Global.style';

import { useTable } from 'react-table';
import { InvoiceDetailsStyled, InvoiceDetailsInfoStyled } from './InvoiceDetails.style';
import { TableStyled } from '../InvoicesTable/InvoicesTable.style';
import { deleteInvoice, getInvoiceDetails } from './InvoiceDetails.logic';

export default function InvoiceDetails() {
    const { data, columns, invoiceDetails, invoiceTotal, isResponsive } = getInvoiceDetails();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const { deleteI } = deleteInvoice();
    // const navigate = useNavigate();

    return (
        <Container>
            <InvoiceDetailsStyled>
                <h3>Invoice Details</h3>
                <InvoiceDetailsInfoStyled>
                    <div className="invoice-client-section">
                        <p>Client:</p>
                        <p>name: {invoiceDetails.client?.name}</p>
                        <p>accountable person: {invoiceDetails.client?.accountablePerson}</p>
                        <p>address: {invoiceDetails.client?.address}</p>
                        <p>uic: {invoiceDetails.client?.uic}</p>
                    </div>
                    <div className="invoice-prop-section">
                        <p>Invoice #: {invoiceDetails.invoice?.number}</p>
                        {/* <p>Operation #: {invoiceDetails.invoice?.operation}</p> */}
                        <p>Date: {invoiceDetails.invoice?.date}</p>
                    </div>
                </InvoiceDetailsInfoStyled>
                <div className="invoice-content-section">
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
                    <div className="invoice-total">Total: {invoiceTotal}</div>
                </div>
                <ButtonsContainer>
                    {/* <FormButton
                        className={'edit-btn'}
                        type={'button'}
                        btnText={'Update'}
                        onClick={() => {
                            // const operation: Operation = row.original;
                            // navigate(`${routes.operations}/details/${operation.id}`, {
                            //     state: { currentOperation: row.original },
                            // });
                        }}
                    /> */}
                    <FormButton
                        className={'delete-btn'}
                        type={'button'}
                        btnText={'Delete'}
                        onClick={async () => {
                            if (invoiceDetails.invoice?.id) {
                                await deleteI(invoiceDetails.invoice?.id);
                            }
                        }}
                    />
                </ButtonsContainer>
            </InvoiceDetailsStyled>
        </Container>
    );
}
