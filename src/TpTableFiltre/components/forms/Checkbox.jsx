/**
 * @param {Boolean} checked 
 * @param {(v: boolean) => void} onCheck 
 * @param {string} label 
 * @param {string} id 
 */
export function Checkbox({checked ,onCheck, label, id}) {
    return <div className="form-check">
      <input className="form-check-input" 
      type="checkbox"   
      id = {id}
      style={{cursor: "pointer"}}
        onChange={(e) => onCheck(e.target.checked)}
        checked = {checked}
      />
      <label htmlFor={id} className="form-check-label">{label}</label>
    </div>  
  }