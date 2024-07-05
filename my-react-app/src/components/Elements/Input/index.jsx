import React from 'react';
import Label from "./Label";
import Input from "./input";

const InputForm = (props) => {
  const { label, name, type, placeholder, value, onChange, required } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputForm;