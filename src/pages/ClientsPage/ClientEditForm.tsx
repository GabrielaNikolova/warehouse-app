import { ChangeEvent, useState } from 'react';
import FormButton from '../../components/Common_components/Button/Button';
import { Container } from '../../components/Common_components/Container.style';
import InputField from '../../components/Common_components/InputField';
import { editClient } from './Clients.logic';
import { ClientFormStyled } from './Clients.style';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ClientEditForm() {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const { handleSubmit } = editClient();
    const location = useLocation();
    const client = location.state.currentClient;
    const id = client.id;
    console.log('location', client, id);

    //setInputs((values) => ({ ...client }));
    console.log('1', inputs);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log('?', name);
        console.log('?', value);

        setInputs((client) => ({ ...client, [name]: value }));
        console.log('1', inputs);
    };
    // const [data, setData] = useState(client);

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // };

    return (
        <Container className="page-center">
            <ClientFormStyled onSubmit={handleSubmit}>
                <FormButton
                    className={'close-btn'}
                    type={'button'}
                    btnText={'Close'}
                    onClick={() => navigate('/clients')}
                ></FormButton>
                <h3 className="form-title">Update Client</h3>
                <InputField
                    type="name"
                    label="Company Name"
                    name="name"
                    placeholder="Please enter company's name"
                    value={client.name}
                    onChange={handleChange}
                />
                <InputField
                    type="address"
                    label="Address"
                    name="address"
                    placeholder="Please enter address"
                    value={client.address}
                    onChange={handleChange}
                />
                <InputField
                    type="accountablePerson"
                    label="Accountable Person"
                    name="accountablePerson"
                    placeholder="Please enter accountable person"
                    value={client.accountablePerson}
                    onChange={handleChange}
                />
                <InputField
                    type="uic"
                    label="UIC"
                    name="uic"
                    placeholder="Please enter company's uic"
                    value={client.uic}
                    onChange={handleChange}
                />
                <FormButton type={'submit'} btnText={'Update'} />
            </ClientFormStyled>
        </Container>
    );
}
