import React, { useState } from "react";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await authService.register(
        name,
        email,
        password,
        confirmPassword
      );
      setMessage(response.data.message);
      // Handle success scenario, e.g., redirect to login
    } catch (error) {
      setMessage("Registration failed");
      console.error("Registration error:", error);
    }

    // Clear form fields
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Nama"
        type="text"
        placeholder="Nama lengkap"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Register
      </Button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default FormRegister;
