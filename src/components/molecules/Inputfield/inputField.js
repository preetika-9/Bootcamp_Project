import React from "react";

const InputField = (props) => {
  const {
    label,
    name,
    type,
    value,
    onChange,
    placeholder,
    error,
    helperText,
    ...rest
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="error-message">{error && error.message}</div>
    </div>
  );
};

export default InputField;
