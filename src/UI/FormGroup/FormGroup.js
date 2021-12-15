import React from "react";

const FormGroup = ({ label, value, setValue, type, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      />
      {error && <p className="text-danger mt-2"> Bu joyni to'ldirish shart!</p>}
    </div>
  );
};

export default FormGroup;
