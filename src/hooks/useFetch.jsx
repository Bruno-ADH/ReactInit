import { useEffect, useState } from "react"

/**
 * @param {string} url 
 * @param {{}} [options={}] 
 */
export function useFetch(url, options = {}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    const headers={
        'Accept': 'application/json; charset=UTF-8',
                ...options.headers
    }

    useEffect(() => {
        fetch(url, {
            ...options, 
            headers
        }).then((r) => r.json())
            .then((data) => {
                setLoading(false)
                setData(data)
            })
            .catch((e) => {
                setLoading(false)
                setErrors(e)
            })
            .finally(()=> setLoading(false))
    },[])

    return {loading, data, errors}
}