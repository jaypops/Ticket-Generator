/* eslint-disable react/prop-types */
import "./Dropdown.css"

export function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="dropdown-container">
      {label && <label className="dropdown-label">{label}</label>}
      <div className="select-wrapper">
        <select value={value} onChange={onChange} className="custom-select">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

