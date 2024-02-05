import styled from "styled-components";

const WarehouseCreateFormStyled = styled.form`
   // margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: auto;
    height: auto;
    //min-width: 300px;
    background-color: var(--purple);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 20px 0 var(--dark-grey);
    min-width: 300px;
    padding: 0.3rem;

    h3 {
        color: var(--white-smoke);
        text-align: center;
    }
`;

export {WarehouseCreateFormStyled };
