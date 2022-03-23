import React from "react";
import "../../../index.css";
import PropTypes from "prop-types";

const InputField = (props) => {
  const { label, name, type, value, onChange, placeholder, error } = props;

  return (
    <div className="mb-3">
      <label htmlFor="FormControlInput" className="form-label fs-4">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className="text-danger">{error && error.message}</div>
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
InputField.defaultProps = {
  label: "",
  name: "",
  type: "",
  value: "",
  onChange: () => {},
  placeholder: "",
  error: "",
};
