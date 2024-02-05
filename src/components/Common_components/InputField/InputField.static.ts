import { ChangeEvent, ReactPropTypes } from "react";

interface InputProps {
    type?: string;
    label?: string;
    value?: string | number;
    name?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    readonly?: boolean;
}

export type {InputProps};