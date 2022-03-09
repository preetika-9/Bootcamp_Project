import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const FormDatePicker = (props) => {
  const {
    label,
    placeholder,
    name,
    value,
    onChange,
    error,
    helperText,
    ...rest
  } = props;
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {label}
      </label>
      <DatePicker
        showPopperArrow={false}
        selected={value}
        onChange={onChange}
        maxDate={new Date()}
        customInput={<input />}
        {...rest}
      />
      <div className="error-message">{error && error.message}</div>
    </div>
  );
};

export default FormDatePicker;
