import { forwardRef, useId } from "react"

/**
 * @param {string} type
 * @param {string} label
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */
export const Input = forwardRef(function Input({type, label, placeholder, value, onChange}, ref) {

  const id = useId()
  return <div className="mb-3">
    <label className="form-label" htmlFor={id}>{label}</label>
    <input
      ref={ref}
      id={id}
      type={type}
      className="form-control"
      name={id}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
})

Input.displayName = 'Input'