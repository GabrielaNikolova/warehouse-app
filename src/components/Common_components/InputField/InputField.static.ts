import { ChangeEvent } from 'react';

interface InputProps {
    type?: string;
    id?: string;
    label?: string;
    value?: string | number;
    name?: string;
    className?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    readonly?: boolean;
}

export type { InputProps };
