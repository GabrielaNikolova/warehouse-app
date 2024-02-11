import styled from 'styled-components';

const HamburgerMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;
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
    @media (min-width: 768px) {
        &.hamburger {
            display: none;
        }
        &.menu {
            transform: translateX(0);
        }
    }
`;

const Bar = styled.div`
    width: 30px;
    height: 4px;
    background-color: var(--green);
    transition: 0.3s;

    @media (min-width: 768px) {
        display: none;
    }
`;

const Div2 = styled.div`
    position: relative;
    top: 0;
    right: 0;
    background-color: #f9f9f9;
    width: auto;
    height: 100%;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    visibility: hidden;

    &.menu.open {
        transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
        visibility: visible;
    }

    & ul {
        list-style-type: none;
        padding: 20px;
        margin: 0;
        background-color: var(--dark-grey);
        width: 100%;
    }

    & li {
        margin-bottom: 10px;
        font-size: 18px;
        color: #333;
        cursor: pointer;
    }
    @media (min-width: 768px) {
        &.hamburger {
            display: none;
        }
        &.menu {
            transform: translateX(0);
        }
    }
`;

export { HamburgerMenuStyled, Div1, Div2, Bar };
