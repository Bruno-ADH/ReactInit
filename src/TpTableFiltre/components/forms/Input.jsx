/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange
 */
export function Input({placeholder, value, onChange}) {
  return <div className="mb-3">
    <input
      type="search"
      className="form-control"
      name=""
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
}