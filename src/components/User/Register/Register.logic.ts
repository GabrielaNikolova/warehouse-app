import { FormEvent } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import useInput from "../../../hooks/useInput";

export default function register() {
    const usernameInput = useInput('');
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const confirmPasswordInput = useInput('');

    const { registerUser } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // validateInput(usernameInput);
        // validateInput(emailInput);
        // validateInput(passwordInput);
        // validateConfirmPassword(confirmPasswordInput);

        await registerUser(usernameInput.value, emailInput.value, passwordInput.value);
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

    const validateConfirmPassword = (input: {
        value: string;
        setError: (value: boolean) => void;
        setErrorMessage: (value: string) => void;
    }) => {
        if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
            input.setError(true);
            input.setErrorMessage(`Passwords don't match`);
        } else {
            input.setError(false);
            input.setErrorMessage('');
        }
    };

    return {
        username: usernameInput,
        email: emailInput,
        password: passwordInput,
        confirmPassword: confirmPasswordInput,
        handleSubmit: handleSubmit,
    };
}
