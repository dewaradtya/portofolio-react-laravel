import React, { useState } from 'react';
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import authService from '../../services/authService';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(email, password);
            setMessage(response.data.message);
            localStorage.setItem('token', response.data.data.token);
            // Redirect or other actions after successful login
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setMessage(`Login failed: ${error.response.data.message}`);
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                setMessage('Login failed: No response received');
                console.error('Request data:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                setMessage(`Login failed: ${error.message}`);
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <form onSubmit={handleLogin}>
          <InputForm
            label="Email"
            type="email"
            placeholder="example@mail.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
          {message && <p>{message}</p>}
        </form>
    );
};

export default FormLogin;