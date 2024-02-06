import { useNavigate } from 'react-router-dom';
import FormButton from '../../../components/Common_components/Button/Button';
import { ButtonsContainer } from '../../../components/Common_components/Button/Button.style';
import { routes } from '../../../statics/routes';

import Card from './WarehouseCard/WarehouseCard';
import { WarehouseCardStyled } from './WarehouseCard/WarehouseCard.style';

import { WarehousesListStyled } from './WarehousesList.style';
import { WarehouseList } from './WarehousesList.static';
import { deleteWarehouse, getWarehouses } from './WarehousesList.logic';

function WarehousesList() {
    const { warehouses, fetchData } = getWarehouses();
    const { deleteW } = deleteWarehouse();
    const navigate = useNavigate();

    return (
        <WarehousesListStyled>
            {warehouses.map((w: WarehouseList) => {
                return (
                    <li key={w.id}>
                        <WarehouseCardStyled className="card">
                            <Card id={w.id} name={w.name} type={w.type} created={w.created}></Card>
                            <ButtonsContainer>
                                <FormButton
                                    className={'edit-btn'}
                                    type={'button'}
                                    btnText={'Edit'}
                                    onClick={() => {
                                        navigate(`${routes.warehouses}/${w.id}`, { state: { currentWarehouse: w } });
                                    }}
                                />
                                <FormButton
                                    className={'delete-btn'}
                                    type={'button'}
                                    btnText={'Delete'}
                                    onClick={async () => {
                                        await deleteW(w.id!);
                                        fetchData();
                                    }}
                                />
                            </ButtonsContainer>
                        </WarehouseCardStyled>
                    </li>
                );
            })}
        </WarehousesListStyled>
    );
}
export default WarehousesList;
