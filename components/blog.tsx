"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function Blog() {

    const router = useRouter()
    const search = useSearchParams()
    const [isFilter, setIsFilter] = useState<boolean>(false)

    useEffect(() => {
        if (search.get("filter") || search.get("search")) {
            setIsFilter(true)
        } else {
            setIsFilter(false)
        }
    }, [search.toString()])

    function clearFilter(){
        setIsFilter(false)
        router.replace("/")
    }

    return (
        <>
            <div className="mt-12 w-[90%] mx-auto p-4 mb-[200px]">
                {isFilter && (<div onClick={() => clearFilter()} className="flex gap-2 items-center rounded-xl bg-red-300 cursor-pointer w-fit h-fit py-1 px-2">
                    <span className="text-xl"><IoCloseSharp /></span>
                    <p>Clear Filter</p>
                </div>)}
            </div>
        </>
    )
}