"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"

export default function Title() {

    const router = useRouter()
    const search = useSearchParams()
    const searchString = search.toString()

    const [searchValue, setSearchValue] = useState<string>("")

    function updateFilter(e: string) {
        const params = new URLSearchParams(searchString)
        params.set("search", e)
        setSearchValue(e)

        router.push(`?${params.toString()}`)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("scrollreveal").then((ScrollReveal) => {
                ScrollReveal.default().reveal(".img", { reset: true, interval: 60 })
            })
        }
    }, [])


    return (
        <>
            <div className="py-2 mx-auto sm:mt-25 flex h-[40dvh]">
                <div className={`-ml-10 hidden mt-5 sm:flex gap-4 sm:flex-col border-[red] w-1/3`}>
                    <div className="w-full h-1/2 flex items-end justify-around">
                        <div className="img w-30 h-30 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title1.png"} fill alt="Foto"></Image></div>
                        <div className="img w-25 h-25 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title2.png"} fill alt="Foto"></Image></div>
                        <div className="img w-15 h-15 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title3.png"} fill alt="Foto"></Image></div>
                    </div>
                    <div className="w-full h-1/2 flex items-start justify-around">
                        <div className="img w-30 h-30 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title4.png"} fill alt="Foto"></Image></div>
                        <div className="img w-25 h-25 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title5.png"} fill alt="Foto"></Image></div>
                        <div className="img w-15 h-15 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title6.png"} fill alt="Foto"></Image></div>
                        <div className="img w-10 h-10 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title7.png"} fill alt="Foto"></Image></div>
                    </div>
                </div>
                <div className="mx-auto w-full sm:w-[39%] flex flex-col items-center justify-center relative">
                    <div id="hiasan" className="rounded-full bg-blue-300 blur-[35px] w-15 h-15 absolute bottom-5 right-6 z-0"></div>
                    <p className="text-4xl hidden sm:block sm:text-5xl">What&apos;s on your mind?</p>
                    <div className="z-10 w-full flex items-center justify-center mt-20 sm:mt-5">
                        <div className="cursor-pointer text-[grey] shadow-xl rounded-l-full text-3xl h-full flex items-center pl-4 pr-1 bg-white">
                            <BiSearch></BiSearch>
                        </div>
                        <input value={searchValue} onChange={(e) => updateFilter(e.target.value)} type="text" placeholder="Search..." className="shadow-xl bg-white rounded-r-full outline-none w-4/5 pr-5 pl-2 py-3" />
                    </div>
                </div>
                <div className={`-mr-10 hidden mt-5 sm:flex gap-4 sm:flex-col border-[red] w-1/3`}>
                    <div className="w-full h-1/2 flex items-end justify-around">
                        <div className="img w-10 h-10 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title10.png"} fill alt="Foto"></Image></div>
                        <div className="img w-15 h-15 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title9.png"} fill alt="Foto"></Image></div>
                        <div className="img w-25 h-25 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title8.jpg"} fill alt="Foto"></Image></div>
                        <div className="img w-30 h-30 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title11.png"} fill alt="Foto"></Image></div>
                    </div>
                    <div className="w-full h-1/2 flex items-start justify-around">
                        <div className="img w-15 h-15 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title12.png"} fill alt="Foto"></Image></div>
                        <div className="img w-25 h-25 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title13.png"} fill alt="Foto"></Image></div>
                        <div className="img w-30 h-30 rounded-xl relative"><Image className="object-cover rounded-xl" src={"/title/title14.png"} fill alt="Foto"></Image></div>
                    </div>
                </div>
            </div>
        </>
    )
}