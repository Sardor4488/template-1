import React from 'react'

const TimeSelect = ({ label, array, setValue }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        className="form-control"
        onChange={(e) => setValue(e.target.value)}
      >
        <option className="disabled">Tanlang</option>
        {array.map((v, i) => (
          <option key={v}>{v}</option>
        ))}
      </select>
    </div>
  )
}

export default TimeSelect
