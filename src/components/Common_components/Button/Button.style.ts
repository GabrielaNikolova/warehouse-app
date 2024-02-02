import styled from "styled-components";

const BtnStyle = styled.button`
    align-self: center;
    background-color: var(--green);
    border: 0.17rem solid var(--purple);
    border-radius: var(--border-radius);
    box-shadow: var(--dark-grey) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-size: var(--font-size-sm);
    font-weight: 550;
    line-height: 23px;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 1.5rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    &.delete-btn{
        background-color: var(--dark-grey);
        margin: 0.5rem;
    }

    &.edit-btn, &.create-btn{
        background-color: var(--purple);
        margin: 0.5rem;
    }
    &.close-btn{
        background-color: transparent;
        position: relative;
        right: 0.5rem;
        top: 0.5rem;
        align-self: flex-end;
        margin: 0;
    }

`;


const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export { BtnStyle, ButtonsContainer };
