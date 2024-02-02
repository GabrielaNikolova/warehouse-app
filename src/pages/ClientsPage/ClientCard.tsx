import { Client } from './Clients.static';

export default function Card(props: Client) {
    return (
        <>
            <h4>{props.name}</h4>
            <p>AP: {props.accountablePerson}</p>
            <p>UIC: {props.uic}</p>
            <p>Address: {props.address}</p>
        </>
    );
}
