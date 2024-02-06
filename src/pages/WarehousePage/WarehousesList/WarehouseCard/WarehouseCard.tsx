import { Warehouse } from './WarehouseCard.static';

export default function Card(props: Warehouse) {
    return (
        <>
            <h4>{props.name}</h4>
            <p>Type: {props.type}</p>
            <p>Operating since: {props.created}</p>
        </>
    );
}
