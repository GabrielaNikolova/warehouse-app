import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
    type?: string;
    label?: string;
    value?: string | number;
    defaultValue?: string | number;
    name?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle = styled.div`
    margin-top: 1rem;
    margin-inline-end: auto;
    margin-inline-start: auto;

    label {
        font-weight: 500;
        font-size: 18px;
        color: var(--white-smoke);
        display: block;
        text-align: left;
        padding-left: 0.8rem;
        //margin-bottom: 8px;
    }

    /* Input field */
    input {
        font-size: 16px;
        font-weight: 400;
        width: 250px;
        color: var(--dark-grey);
        background: var(white-smoke);
        border: 0.17rem solid var(--dark-grey);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 8px;
        padding: 10px 14px;
        margin-bottom: 1rem;
    }

    input::placeholder {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--grey);
    }

    /* Input field focus */
    input:focus {
    }

    .error {
        color: var(--red);
        font-size: var(--font-size-sm);
        font-weight: 500;
        margin-left: 1.2rem;
        margin-top: 0.4rem;
    }
`;

export default function InputField({ ...props }: InputProps) {
    return (
        <InputStyle>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.type}
                id={props.label}
                value={props.value}
                defaultValue={props.defaultValue}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            {props.error && <p className="error">{props.errorMessage}</p>}
        </InputStyle>
    );
}
