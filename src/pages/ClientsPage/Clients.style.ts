import styled from 'styled-components';

const ClientsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
    max-width: 90%;
    padding: 0;

    /* max-width: 1000px; */
    margin: 5rem auto;
`;
const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    background: var(--green);
    padding: 1rem;
    border-radius: 2rem;
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
        margin: 1rem 0;
        font-weight: 500;
    }
`;

const ClientFormStyled = styled.form`
   // margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: auto;
    height: auto;
    min-width: 300px;
    background-color: var(--purple);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 20px 0 var(--dark-grey);
    padding: 0.5rem;
    //overflow-y: auto;

    h3 {
        color: var(--white-smoke);
        text-align: center;
    }
`;

const ClientCreateFormStyled = styled(ClientFormStyled)`
    min-width: 350px;
    padding: 0.3rem;
`;

export { CardStyled, ClientsList, ClientFormStyled, ClientCreateFormStyled };
