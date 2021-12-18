import React from "react";

const FormGroup = ({ type, className, value, setValue, label }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default FormGroup;
