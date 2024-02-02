import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 10;

    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        margin: 0px;
    }

    a {
        margin: 0px 2rem;
        position: relative;
        font-weight: 500;
        font-size: 0.9em;
        color: var(--white-smoke);
    }

    a:hover {
        border-bottom: 4px solid var(--green);
        transition: 0.2s ease-in-out;
    }
    .active {
        border-bottom: 4px solid var(--green);
    }
`;

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    width: calc(100% - 100px);
    height: var(--nav-heigth);
    background-color: var(--dark-grey);
    padding: 0px 5rem 0px 5rem;
`;

export { Nav, HeaderStyle };
