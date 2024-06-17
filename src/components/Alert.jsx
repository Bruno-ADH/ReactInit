import { useToggle } from "../hooks/useToggle"

/**
 * @param {"danger" | "info" | "warning"} type 
 */
export function Alert ({type= 'info', children}) {
    const [state, toggle] = useToggle(true)

    if(!state){
        return null
    }

    return <div className={`alert alert-type`} role="alert">
        {children}
        <button onClick={toggle}>Fermer</button>
    </div>
}