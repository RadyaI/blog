"use client"

import { FaCode } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoChatboxEllipsesOutline, IoCloseSharp } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "animate.css"

import { useState } from "react";

export default function Navbar() {

    const router = useRouter()
    const search = useSearchParams()

    const [toggleContact, setToggleContact] = useState<boolean>(false)

    function updateFilter(e: string){
        const params = new URLSearchParams(search.toString())
        params.set("filter", e)
        router.push(`?${params.toString()}`)
    }

    function Contact() {
        return (
            <>
                <div className="z-[999999] animate__animated animate__slideInDown border rounded-2xl bg-black px-4 pb-10 pt-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="mb-4 text-[var(--background)] flex justify-end cursor-pointer text-4xl">
                        <span onClick={() => setToggleContact(false)}><IoCloseSharp /></span>
                    </div>
                    <div>
                        <p className="font-bold text-3xl text-center text-[var(--background)]">Get In Touch</p>
                        <p className="text-center mt-2 text-[grey]">Have a project, an idea, or just want to say hi? Feel free to reach out—I&apos;d love to hear from you and see how we can work together!</p>
                    </div>
                    <div className="p-2 mt-3 w-[70%] mx-auto flex justify-around">
                        <a href="https://instagram.com/radyaif"><div className="w-fit hover:text-[#E1306C] text-[var(--background)] flex gap-1 text-lg cursor-pointer items-center"> <span className="text-2xl"><FaInstagram /></span> Instagram </div></a>
                        <a href="https://github.com/RadyaI"><div className="w-fit hover:text-[#efefefaa] text-[var(--background)] flex gap-1 text-lg cursor-pointer items-center"> <span className="text-2xl"><FaGithub /></span> Github </div></a>
                        <a href="https://www.linkedin.com/in/radyaa/"><div className="w-fit hover:text-[#0077B5] text-[var(--background)] flex gap-1 text-lg cursor-pointer items-center"> <span className="text-2xl"><FaLinkedin /></span> LinkedIn </div></a>
                    </div>
                    <div className="mt-4 w-[70%] mx-auto text-[var(--background)] flex items-center justify-center gap-2">
                        <span className="text-[var(--background)] text-2xl"><CiMail /></span>
                        <a href="mailto:radyaiftikhar@gmail.com"><p className="cursor-pointer">radyaiftikhar@gmail.com</p></a>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {toggleContact && (<Contact />)}
            <div className="p-4 bg-[#F5EEDC] z-[99999] top-0 flex fixed w-full flex-col sm:flex-row justify-between items-center">
                <p className="font-bold text-3xl ml-2">RaWrites.</p>
                <div className="p-2 mt-4 sm:mt-0 w-1/3 flex justify-center gap-5">
                    <p onClick={() => updateFilter("Coding")} className="font-semibold rounded-xl bg-green-200 hover:bg-green-300 transition-all py-1 px-3 flex items-center gap-2 cursor-pointer"><FaCode />Coding</p>
                    <p onClick={() => updateFilter("Tutorial")} className="font-semibold rounded-xl bg-amber-200 hover:bg-amber-300 transition-all py-1 px-3 flex items-center gap-2 cursor-pointer"><MdOutlineTipsAndUpdates />Tutorial</p>
                    <p onClick={() => updateFilter("Talk")} className="font-semibold rounded-xl bg-blue-200 hover:bg-blue-300 transition-all py-1 px-3 flex items-center gap-2 cursor-pointer"><IoChatboxEllipsesOutline />Talk</p>
                </div>
                <div className="hidden sm:flex">
                    <a href="https://radya.fun" target="_blank"><p className="mr-4 cursor-pointer hover:underline">Radya</p></a>
                    <p className="mr-4 cursor-pointer hover:underline" onClick={() => setToggleContact(!toggleContact)}>Contact</p>
                </div>
            </div>
        </>
    )
}