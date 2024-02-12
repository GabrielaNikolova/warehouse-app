import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
    position: relative;
    width: auto;
    z-index: 10;

    .nav-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        margin: 0px;

        @media (max-width: 768px) {
            display: none;
        }
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
    justify-content: right;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: auto;
    height: var(--nav-heigth);
    background-color: var(--dark-grey);
    padding: 0px 3rem 0px 5rem;

    @media (max-width: 768px) {
            height: 6rem;
        }
`;

export { Nav, HeaderStyle };
