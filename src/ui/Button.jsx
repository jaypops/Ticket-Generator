/* eslint-disable react/prop-types */
import "./Button.css"

export function Button({ children, variant = "primary", onClick, className = "", ...props }) {
  return (
    <button className={`custom-button ${variant} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

