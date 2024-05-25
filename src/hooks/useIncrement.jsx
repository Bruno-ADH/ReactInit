import { useCallback, useState } from "react";

export function useIncrement({base = 0, max = Infinity, min = -Infinity}) {
    const [count, setCount] = useState(base)
    const incrementCount = useCallback(() => {
        setCount(v => {
            if(v >= max){
                return v
            }
            return v + 1
        })
    }, [max])

    const decrementCount = useCallback(() => {
        setCount(v => {
            if(v <= min){
                return v
            }
            return v - 1
    })
    }, [min])

    return {
        count: count,
        increment:incrementCount,
        decrement:decrementCount
    }
}