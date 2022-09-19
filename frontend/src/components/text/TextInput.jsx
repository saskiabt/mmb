import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  const { type, values, handleChange, placeholder, name, label } = props;
  return (
    <label htmlFor={name} className="input-box">
      {" "}
      {label && <div className="date-label">{label}</div>}
      <input
        type={type}
        value={values}
        onChange={handleChange}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </label>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  values: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
};

TextInput.displayName = "TextInput";
export default TextInput;
