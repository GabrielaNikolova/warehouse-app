import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100%;
    height: 100vh;

    &.clients-container{
        height: auto;
        padding-top: 15rem;
    }
    
`;

export { Container };
