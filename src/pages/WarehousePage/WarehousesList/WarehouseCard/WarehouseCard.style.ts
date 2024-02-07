import styled from "styled-components";

const WarehouseCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    width: auto;
    background: var(--green);
    padding: 1rem;
    border-radius: 1rem;
    border: 0.3rem solid var(--purple);
    //box-shadow: 0 10px 20px 0 var(--dark-grey);
    box-shadow: 0.2rem 0.4rem var(--purple);
    overflow: hidden;
    color: var(--white);
    font-size: var(--font-size-base);
    font-weight: 500;

    h4 {
        color: var(--white-smoke);
        background-color: var(--purple);
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
    }
    p {
        display: flex;
        flex-wrap: wrap;
        margin: 1rem 0;
        font-weight: 500;
    }
`;

export { WarehouseCardStyled };
