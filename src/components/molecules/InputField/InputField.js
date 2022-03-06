import React from "react";
import "../../../index.css";

const InputField = (props) => {
  const { label, name, type, value, onChange, placeholder, error } = props;

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput" className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="form-control"
        id="exampleFormControlInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="text-danger">{error && error.message}</div>
    </div>
  );
};

export default InputField;
