import styled from 'styled-components';

const ErrorMessageStyled = styled.div`
 display: inline;

    color: var(--white-smoke);
    text-align: center;
    font-weight: 500;
    font-size: var(--font-size-sm);
    padding-bottom: 1rem;
    
    span{
        //background-color: var(--red);
        text-shadow: 4px 4px 5px var(--red), 0 0 1rem var(--red), 0 0 0.2rem var(--red);
        
        border-radius: 0.5rem;

    }
`;

export default ErrorMessageStyled;
