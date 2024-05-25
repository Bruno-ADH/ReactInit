import { useEffect, useState, useRef } from "react";

export function useDocumentTitle(initial){

    const titleRef = useRef(document.title)

    useEffect(()=>{
        return ()=>{
            document.title = titleRef.current
        }
    },[])

    useEffect(()=>{
        document.title = initial ? initial : titleRef.current
    },[initial])
}