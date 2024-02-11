import styled from 'styled-components';

const InvoiceDetailsStyled = styled.section`
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
        justify-content: center;
    }
    p {
        padding: 0 1rem;
        margin: 0.5rem 0;
        font-weight: 500;
    }
    
    .invoice-client-section{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0;
        padding: 0 0 0 1rem;
    }

    .invoice-prop-section{
        display: flex;
        flex-direction: column;
        justify-content: left;
        margin: 0;

    }

    .invoice-content-section{
        display: flex;
        flex-direction: column;
        justify-content: right;
        margin: 0;
    }


    .invoice-total {
        text-align: right;
        padding-right: 5rem;

    }
`;
const InvoiceDetailsInfoStyled = styled.div`
    display: flex;
    width: auto;
    background: var(--white-smoke);
    color: var(--dark-grey);
    font-size: var(--font-size-base);
    font-weight: 500;
    column-gap: 7rem;
`;

export { InvoiceDetailsStyled, InvoiceDetailsInfoStyled };
