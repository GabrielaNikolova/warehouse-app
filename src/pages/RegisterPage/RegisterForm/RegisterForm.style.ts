import styled from 'styled-components';

const RegisterFormStyled = styled.form`
    // margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    width: auto;
    height: auto;
    min-width: 350px;
    background-color: var(--purple);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 20px 0 var(--dark-grey);
    padding: 0.3rem;

    h3 {
        color: var(--white-smoke);
        text-align: center;
    }
`;

const NavLinkRegister = styled.a`
    color: var(--white-smoke);
    padding: 0.3rem;
    text-align: center;
    font-size: var( --font-size-sm);
`;
export { RegisterFormStyled, NavLinkRegister };