import { FormEvent } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import useInput from "../../../hooks/useInput";

export default function login() {
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const { loginUser } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        console.log('email ==>', emailInput.value, 'password ==>', passwordInput.value);

        await loginUser(emailInput.value, passwordInput.value);
    };

    return {
        email: emailInput,
        password: passwordInput,
        handleSubmit: handleSubmit
    }
}