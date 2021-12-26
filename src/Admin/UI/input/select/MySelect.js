import React from "react";

const MySelect = ({ label, setValue, array }) => {
  return (
    <div className="form-group">
      <label> {label} </label>
      <select
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      >
        {array.map((v, i) => {
          return (
            <option key={i} value={v.id}>
              {v.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MySelect;
