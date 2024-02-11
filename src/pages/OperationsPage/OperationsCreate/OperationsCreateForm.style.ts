import styled from 'styled-components';
const OperationCreateFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: auto;
    height: auto;
    margin: 1rem;
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

const SelectStyle = styled.div`
    margin-top: 1rem;
    margin-inline-end: auto;
    margin-inline-start: auto;

    &.products-container {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        margin-bottom: 0;
    }

    label {
        font-weight: 500;
        font-size: 18px;
        color: var(--white-smoke);
        display: block;
        text-align: left;
        padding-left: 0.8rem;
    }

    select {
        font-size: var(--font-size-sm);
        font-weight: 400;
        width: 250px;
        height: fit-content;
        color: var(--dark-grey);
        background: var(white-smoke);
        border: 0.17rem solid var(--dark-grey);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        padding: 10px 14px;
    }

    select::placeholder {
        font-size: var(--font-size-sm);
        font-weight: 400;
        color: var(--grey);
    }

    .error {
        color: var(--red);
        font-size: var(--font-size-sm);
        font-weight: 500;
        margin-left: 1.2rem;
        margin-top: 0.4rem;
    }

    &.remove-product-btn {
        margin: 0;
    }
`;

const Option = styled.option`
    font-size: var(--font-size-sm);
    font-weight: 400;
    width: 250px;
    color: var(--dark-grey);
    padding: 10px 14px;
    margin-bottom: 1rem;
    min-height: 1em;
`;

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
`;

export { OperationCreateFormStyled, SelectStyle, Option, ProductsContainer };
