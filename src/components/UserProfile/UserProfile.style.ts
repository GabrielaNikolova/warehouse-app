import styled from 'styled-components';

const UserMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 29px;
    right: 20px;
    z-index: 10;

    @media (max-width: 768px) {
        right: auto;
        top: 17px;
        left: 70px;
    }
`;

const Div1 = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background-color: transparent;
    border: none;
    outline: none;

    button {
        margin: 0;
        position: relative;
        right: 3rem;
        margin-right: 4rem;
        font-weight: 500;
        font-size: 0.9em;
        padding: 0;
        background: transparent;
        color: var(--white-smoke);
        width: auto;
        height: auto;
        border-color: transparent;
        @media (min-width: 768px) {
            left: 0;
            right: auto;
        }
    }
`;

const Div2 = styled.div`
    position: relative;
    top: 3rem;
    right: 0;
    background-color: var(--dark-grey);
    color: var(--white-smoke);
    font-weight: 500;
    font-size: var(--font-size-base);
    width: auto;
    height: auto;
    justify-items: center;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    display: none;

    @media (max-width: 768px) {
        top: 2rem;
        &.user {
            display: none;
        }
        &.menu {
            transform: translateY(0);
        }
        &.menu.open {
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        visibility: visible;
        display: block;
    }
    }

    p {
        padding: 0 1rem 0 1rem;
    }
    .logout {
        margin: 0px 2rem;
        position: relative;
        font-weight: 500;
        font-size: 0.9em;
        padding-bottom: 1rem;
        color: var(--white-smoke);
        cursor: pointer;
    }
    .logout:hover {
        border-bottom: 4px solid var(--green);
        transition: 0.2s ease-in-out;
    }
    &.menu.open {
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        visibility: visible;
        display: block;
    }


`;

export { UserMenuStyled, Div1, Div2 };
