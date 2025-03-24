"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function Title(){
    
    const searchParams = useSearchParams()
    const filter = searchParams.get("filter")

    return(
        <>
            
        </>
    )
}