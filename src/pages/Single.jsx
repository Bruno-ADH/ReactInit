import { useParams } from "react-router-dom"

export function Single() {
    const {id} = useParams()

    // throw new Error('erreur')

    return (<div className="container my-4">
        <h3>Article {id}</h3>
    </div>)
}