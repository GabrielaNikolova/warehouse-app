import { FormEvent } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import useInput from "../../../hooks/useInput";

export default function login() {
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const { loginUser } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // validateInput(emailInput);
        // validateInput(passwordInput);

        console.log('email ==>', emailInput.value, 'password ==>', passwordInput.value);

        await loginUser(emailInput.value, passwordInput.value);
    };

    const validateInput = (input: {
        value: string;
        setError: (value: boolean) => void;
        setErrorMessage: (value: string) => void;
    }) => {
        if (!input.value.trim()) {
            input.setError(true);
            input.setErrorMessage('Please enter data in the field!');
        } else {
            input.setError(false);
            input.setErrorMessage('');
        }
    };

    return {
        email: emailInput,
        password: passwordInput,
        handleSubmit: handleSubmit
    }
}