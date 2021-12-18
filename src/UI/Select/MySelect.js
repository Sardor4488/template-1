import React from "react";

const MySelect = ({ label, setValue, array, error, item, itemDelete }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <select
        className="form-control select"
        onChange={(e) => setValue(e.target.value)}
      >
        {array &&
          array.map((v, i) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
      </select>
      {item ? (
        <div className="row pt-3 px-2 m-0">
          {" "}
          {item &&
            item.map((v, i) => (
              <div
                className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center align-items-center p-0"
                key={i}
              >
                <div className=" d-flex align-items-center justify-content-between p-1">
                  <div className="me-2">{v}cha</div>{" "}
                  <div>
                    <i
                      onClick={() => itemDelete(v)}
                      className="fas fa-times"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
      {error && <p className="text-danger mt-2"> Bu joyni to'ldirish shart!</p>}
    </div>
  );
};

export default MySelect;
