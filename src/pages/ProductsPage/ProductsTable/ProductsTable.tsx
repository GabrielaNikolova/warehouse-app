import { useTable } from 'react-table';
import FormButton from '../../../components/Common_components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../statics/routes';
import { deleteProduct, getProducts } from './ProductsTable.logic';
import { TableStyled } from './ProductsTable.style';
import { Product } from './ProductsTable.static';
import { ProductUpdate } from '../ProductsUpdate/ProductsUpdateForm.static';

function ProductsTable() {
    const { data, columns, fetchData } = getProducts();
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
    const { deleteP } = deleteProduct();
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
                                    btnText={'Edit'}
                                    onClick={() => {
                                        const product: ProductUpdate = row.original;
                                        navigate(`${routes.products}/${product.id}`, {
                                            state: { currentProduct: row.original },
                                        });
                                    }}
                                />
                                <FormButton
                                    className={'delete-btn'}
                                    type={'button'}
                                    btnText={'Delete'}
                                    onClick={async () => {
                                        await deleteP(row.original);
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

export default ProductsTable;
