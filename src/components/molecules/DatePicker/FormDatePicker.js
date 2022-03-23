import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

const FormDatePicker = (props) => {
  const {
    label,
    // placeholder,
    // name,
    value,
    onChange,
    error,
    ...rest
  } = props;

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label fs-4">
        {label}
      </label>
      <DatePicker
        showPopperArrow={false}
        selected={value}
        onChange={onChange}
        maxDate={new Date()}
        customInput={<input />}
        {...rest}
        className=" form-control form-control-md "
      />
      <div className="error-message">{error && error.message}</div>
    </div>
  );
};

export default FormDatePicker;

FormDatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};
FormDatePicker.defaultProps = {
  label: "",
  name: "",
  type: "",
  value: "",
  onChange: () => {},
  placeholder: "",
  error: "",
};
