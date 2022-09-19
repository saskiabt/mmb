/* eslint-disable react/prop-types */
import React from "react";

function TextArea({ type, values, handleChange, placeholder, name, form }) {
  return (
    <label htmlFor={name}>
      <textarea
        type={type}
        value={values}
        onChange={handleChange}
        placeholder={placeholder}
        id={name}
        name={name}
        form={form}
      />
    </label>
  );
}

export default TextArea;
