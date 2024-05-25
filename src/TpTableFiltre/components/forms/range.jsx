export function Range({value, onChange}) {
 return <div>
    <input 
        onChange={(e) => onChange(e.target.value)}
        type="range"
        className="form-range"
        id="range"
        value={value}
        min={0}
        max={10} />
 </div>
}