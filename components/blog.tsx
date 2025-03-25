"use client"

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import AOS from 'aos'
import "aos/dist/aos.css"

export default function Blog() {

    const router = useRouter()
    const search = useSearchParams()
    const searchString = search.toString()
    const [isFilter, setIsFilter] = useState<boolean>(false)
    const [isAnimate, setIsAnimate] = useState<boolean>(false)

    useEffect(() => {
        AOS.init({ duration: 800, once: false })
        if (search.has("filter") || search.has("search")) {
            setIsFilter(true)
        } else {
            if (!isAnimate) setIsFilter(false)
        }
    }, [searchString, search])

    function clearFilter() {
        setIsAnimate(true)
        router.replace("/")
        setTimeout(() => {
            setIsFilter(false)
            setIsAnimate(false)
        }, 2000);
    }

    return (
        <>
            {isFilter && (
                <div className="mt-12 w-[90%] mx-auto p-4 mb-[200px]">
                    <div onClick={() => clearFilter()} className={`flex ${isAnimate ? "hidden" : ""} gap-2 items-center rounded-xl bg-red-300 cursor-pointer w-fit h-fit py-1 px-2`}>
                        <span className="text-xl"><IoCloseSharp /></span>
                        <p>Clear Filter</p>
                    </div>
                    <div className={`animate__animated animate__fadeInUp ${isAnimate ? "animate__fadeOutDown" : ""} flex flex-wrap justify-start gap-3`}>

                        <div data-aos="fade-up" className="mt-4 w-full sm:w-[24%] h-[180px] relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={"/title/title8.jpg"} alt="Thumbnail" className="object-cover" fill />
                            <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 w-full h-1/2 p-3 text-white z-10">
                                <p className="font-semibold overflow-hidden line-clamp-2 text-ellipsis h-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae rem exercitationem neque placeat nesciunt alias nam quibusdam. Ab quaerat aliquam rem provident nobis minus natus soluta maxime similique officiis.</p>
                                <small className="opacity-80">8 Mei 2025</small>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-4 w-full sm:w-[24%] h-[180px] relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={"/title/title8.jpg"} alt="Thumbnail" className="object-cover" fill />
                            <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 w-full h-1/2 p-3 text-white z-10">
                                <p className="font-semibold overflow-hidden line-clamp-2 text-ellipsis h-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae rem exercitationem neque placeat nesciunt alias nam quibusdam. Ab quaerat aliquam rem provident nobis minus natus soluta maxime similique officiis.</p>
                                <small className="opacity-80">8 Mei 2025</small>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-4 w-full sm:w-[24%] h-[180px] relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={"/title/title8.jpg"} alt="Thumbnail" className="object-cover" fill />
                            <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 w-full h-1/2 p-3 text-white z-10">
                                <p className="font-semibold overflow-hidden line-clamp-2 text-ellipsis h-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae rem exercitationem neque placeat nesciunt alias nam quibusdam. Ab quaerat aliquam rem provident nobis minus natus soluta maxime similique officiis.</p>
                                <small className="opacity-80">8 Mei 2025</small>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-4 w-full sm:w-[24%] h-[180px] relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={"/title/title8.jpg"} alt="Thumbnail" className="object-cover" fill />
                            <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 w-full h-1/2 p-3 text-white z-10">
                                <p className="font-semibold overflow-hidden line-clamp-2 text-ellipsis h-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae rem exercitationem neque placeat nesciunt alias nam quibusdam. Ab quaerat aliquam rem provident nobis minus natus soluta maxime similique officiis.</p>
                                <small className="opacity-80">8 Mei 2025</small>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="mt-4 w-full sm:w-[24%] h-[180px] relative rounded-xl cursor-pointer overflow-hidden group">
                            <Image src={"/title/title8.jpg"} alt="Thumbnail" className="object-cover" fill />
                            <div className="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/30"></div>
                            <div className="absolute bottom-0 w-full h-1/2 p-3 text-white z-10">
                                <p className="font-semibold overflow-hidden line-clamp-2 text-ellipsis h-[70%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente molestiae rem exercitationem neque placeat nesciunt alias nam quibusdam. Ab quaerat aliquam rem provident nobis minus natus soluta maxime similique officiis.</p>
                                <small className="opacity-80">8 Mei 2025</small>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}