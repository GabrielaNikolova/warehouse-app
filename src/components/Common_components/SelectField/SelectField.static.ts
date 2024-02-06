import { ChangeEvent } from "react";

interface SelectProps {
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
    options: SelectOption[];

}
type SelectOption = {
    label: string;
    value: string;
  };


export type {SelectProps};