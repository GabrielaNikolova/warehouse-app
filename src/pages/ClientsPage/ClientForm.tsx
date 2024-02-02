import { useNavigate } from "react-router-dom";
import FormButton from "../../components/Common_components/Button/Button";
import { Container } from "../../components/Common_components/Container.style";
import InputField from "../../components/Common_components/InputField";
import { createClient } from "./Clients.logic";
import { ClientCreateFormStyled } from "./Clients.style";

export default function ClientForm() {
  const navigate = useNavigate();
  const { client, handleSubmit } = createClient();

  return (
    <Container className="page-center">
      <ClientCreateFormStyled onSubmit={handleSubmit}>
        <FormButton
          className={"close-btn"}
          type={"button"}
          btnText={"Close"}
          onClick={() => navigate("/clients")}
        ></FormButton>
        <h3 className="form-title">Create new Client</h3>
        <InputField
          type="name"
          label="Company Name"
          name="name"
          placeholder="Please enter company's name"
          {...client.name}
        />
        <InputField
          type="address"
          label="Address"
          name="address"
          placeholder="Please enter address"
          {...client.address}
        />
        <InputField
          type="accountablePerson"
          label="Accountable Person"
          name="accountablePerson"
          placeholder="Please enter accountable person"
          {...client.accountablePerson}
        />
        <InputField
          type="uic"
          label="UIC"
          name="uic"
          placeholder="Please enter company's uic"
          {...client.uic}
        />
        <FormButton type={"submit"} btnText={"Create"} />
      </ClientCreateFormStyled>
    </Container>
  );
}
