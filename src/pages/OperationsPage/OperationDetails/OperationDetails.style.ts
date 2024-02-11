import styled from "styled-components";

const OperationDetailsStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: 1000px;
    background: var(--white-smoke);
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    border: 0.3rem solid var(--purple);
    box-shadow: 0.2rem 0.4rem var(--purple);
    overflow: hidden;
    color: var(--dark-grey);
    font-size: var(--font-size-base);
    font-weight: 500;

    h3 {
        color: var(--white-smoke);
        background-color: var(--purple);
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
    }
    h4 {
        color: var(--white-smoke);
        background-color: var(--purple);
        width: 100%;
        padding: 1rem;
        border-radius: 1rem;
    }
    p {
        padding: 0 1rem;
        margin:  0.5rem 0;
        font-weight: 500;
    }
`;
const OperationDetailsInfoStyled = styled.div`
display: flex;
    flex-direction: column;
    width: auto;
    background: var(--white-smoke);
    padding: 0 0 0 1rem;
    color: var(--dark-grey);
    font-size: var(--font-size-base);
    font-weight: 500;
`



export { OperationDetailsStyled, OperationDetailsInfoStyled };
