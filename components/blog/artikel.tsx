"use client"

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { GoDotFill } from "react-icons/go";
import { FaSun, FaMoon, FaGithub, FaLink, FaComment, FaEye } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast, { Toaster } from "react-hot-toast";

export default function Artikel({ title }: { title: string }) {

    const router = useRouter()
    const [theme, setTheme] = useState<string>("light")

    const text = `# 📦 Rangkuman Data untuk AI 

Pernah denger pepatah “Garbage in, garbage out”? Yap! Di dunia AI, kualitas data itu segalanya. Yuk, kita kulik seru-seruan soal data yang jadi bahan bakar utama si AI ini! 💥

---

## 🔍 Apa Itu Data?
Data itu kayak bahan mentah buat bikin AI. Semakin bagus kualitasnya, semakin jago hasil AI-nya.

> 📘 Menurut KBBI, data adalah “keterangan atau bahan nyata yang dapat dijadikan dasar kajian.”

> 💻 Menurut Cambridge Dictionary, data adalah “informasi berbentuk angka/fakta yang bisa diproses oleh komputer.”

> 🧠 Menurut Tata Sutabri, data itu “kenyataan mentah yang belum banyak artinya, tapi bisa diolah jadi informasi.”

Intinya: Data itu informasi mentah yang bisa dikolah supaya jadi sesuatu yang berguna.

---

## 📦 Data, Dataset, dan Basis Data
Kadang istilah-istilah ini suka ketuker-tuker, tapi tenang aja — kita bedain dengan cara yang simpel dan jelas!

| Istilah | Penjelasan |
|--------|------------|
| **Data** | Potongan informasi kecil: bisa angka, teks, gambar, suara |
| **Dataset** | Kumpulan data yang udah ditata rapi (biasanya bentuk tabel) |
| **Basis Data (Database)** | Tempat nyimpen banyak dataset secara terstruktur dan bisa diakses kapan aja |

### 🍛 Contoh Analoginya~
- **Data** = 1 potong rendang 🥩  
- **Dataset** = 1 porsi nasi Padang lengkap (nasi + lauk + sayur + sambal) 🍛  
- **Database** = Warung Padang penuh menu dari rendang sampai gulai ayam 🏪

> Satu potong rendang enak sih, tapi belum kenyang.  
> Satu porsi nasi Padang? Nah, itu baru mantap.  
> Tapi kalau kamu sampai masuk dapurnya warung Padang? Wahhh... itu baru database penuh rasa 😆🔥 (aduhh jadi pengenn,wkwkw)

---

## 🧩 Tipe-Tipe Data
AI butuh makanan bergizi. Jadi, data juga harus sesuai tipe!

### 🧾 1. Data Terstruktur
Data yang udah rapi—kayak tabel di Excel. Ada dua turunan:

#### 📊 a. Data Kuantitatif (berbentuk angka)
- **Diskrit:** Angka bulat, gak bisa dibagi-bagi (contoh: jumlah orang)
- **Kontinu:** Bisa berupa desimal (contoh: suhu, tinggi badan)

#### 🏷️ b. Data Kategorikal (berbentuk kategori)
- **Ordinal:** Ada urutannya (contoh: rating bintang, level pendidikan)
- **Nominal:** Cuma kategori aja (contoh: jenis kelamin, warna favorit)

### 📂 2. Data Tidak Terstruktur
Data yang bentuknya nggak rapi: teks bebas, gambar, audio, video. Biasanya perlu proses lebih rumit biar bisa dipahami AI.

Contoh:
- Chat history
- Postingan media sosial
- Gambar meme 🤡 (wkwkw)

---

## ⚠️ Masalah-Masalah dalam Data
Nah, ini dia penyebab kenapa AI bisa jadi error 😬

| Masalah | Penjelasan |
|---------|------------|
| Data Kosong | Nilainya hilang, bikin hasil gak akurat |
| Data Duplikat | Ada data yang sama berulang-ulang |
| Outlier | Nilai ekstrem yang bikin data bias |
| Data Tidak Relevan | Gak nyambung sama topik yang dianalisis |

🧽 Solusinya? Bersihin dulu sebelum dilatih ke AI~

---

## 🛠 Infrastruktur Data di Industri
Tujuannya? Biar data gak nyebar kemana-mana dan bisa diolah jadi wawasan kerenn! 😎

- **Manajemen Data:** Simpen & atur data biar gak berantakan
- **Pemrosesan Data:** Komputer kerja keras analisis data
- **Integrasi Data:** Gabungin dari banyak sumber
- **Keamanan Data:** Biar gak bocor atau dicuri 🔐

> 🧠 *Data itu aset. Jadi, mesti dijaga kayak jaga hati 🥹 (Eaak).*
> Kalau sembarangan, bisa-bisa bikin sistem jadi error kayak perasaan yang gak dijaga 😆 (beuhh)

---

## 🧠 GIGO (Garbage In, Garbage Out)

> "Kasih data semrawut ke AI tuh kayak nyuruh kucing ngitung kembalian — chaos! 😹”

Makanya penting banget ngecek dan bersihin data sebelum dipake buat ngelatih AI. Jangan sampai:

🚫 AI diajarin hal yang salah  
🚫 Prediksi jadi ngawur  
🚫 Keputusan malah ngerugiin

---

## 🏁 Penutup

Sampai sini, kamu udah paham banget kan pentingnya data buat AI? 😎  
Mulai dari jenis-jenis data, perbedaan dataset dan basis data, sampai kenapa kualitas data itu krusial poll!

Inget yaaa:

🔁 Data yang jelek = AI yang ngawur
✅ Data yang rapi dan relevan = AI yang keren dan bisa diandalkan 💪

Jadi, kalau nanti kamu bikin AI, jangan cuma fokus ke algoritma aja yaa~
Karena tanpa data yang oke, AI cuma secanggih kertas kosong 😅

Keep learning, keep exploring, dan jangan lupa...  
**Data is the new fuel, and you’re the pilot! 🚀**

> Mulai aja dulu dari dataa, AI keren itu hasil dari proses -sama kayak kamu sekarang 💪

---
### Ini Lanjutannya yaa~
[Rangkuman Pengantar ML](https://github.com/nahira08/Belajar-Dasar-AI/blob/main/Rangkuman%20Pengantar%20ML.md)`

    function ToggleTheme() {
        return (
            <>
                <div className="fixed cursor-pointer top-5 right-5 flex justify-center items-center rounded-full w-10 h-10">
                    {theme === "dark" && (<span className="text-2xl text-[var(--background)]" onClick={() => setTheme("light")}><FaSun></FaSun></span>)}
                    {theme === "light" && (<span className="text-2xl" onClick={() => setTheme("dark")}><FaMoon></FaMoon></span>)}
                </div>
            </>
        )
    }

    const copyLink = () => {
        navigator.clipboard.writeText(`https://blog.radya.fun/${title}`)
        toast.success("Copied!")
    }

    const comment = () => {
        toast("Belum jadi!", {
            icon: '⚠️'
        })
    }

    function SideMenu() {
        return (
            <>
                <Toaster
                    position="top-center"
                />
                <div className={`fixed ${theme === "dark" ? "text-[var(--background)]" : ""} shadow-2xl rounded-md sm:flex sm:flex-col gap-7 hidden h-fit top-[22%] p-3 py-6 left-15`}>
                    <div className="border border-gray-600 rounded-full w-13 h-13 cursor-pointer flex justify-center items-center text-2xl"><FaGithub></FaGithub></div>
                    <div className="flex flex-col items-center">
                        <div className="border border-gray-600 rounded-full w-13 h-13 cursor-pointer flex flex-col justify-center items-center text-2xl"><FaEye></FaEye></div>
                        <span className="text-sm">43</span>
                    </div>
                    <div onClick={comment} className="border border-gray-600 rounded-full w-13 h-13 cursor-pointer flex justify-center items-center text-2xl"><FaComment></FaComment></div>
                    <div onClick={() => copyLink()} className="border border-gray-600 rounded-full w-13 h-13 cursor-pointer flex justify-center items-center text-2xl"><FaLink></FaLink></div>
                </div>
            </>
        )
    }

    return (
        <>

            <ToggleTheme></ToggleTheme>
            <SideMenu></SideMenu>

            <div className={` ${theme === "dark" ? "bg-[#121212] text-[white]" : ""} overflow-y-auto w-full h-[100dvh]`}>
                <div className="mt-15 w-[90%] sm:w-4/6 mx-auto">
                    <div id="navigator" className="flex items-center">
                        <small className={`cursor-pointer ${theme === "dark" ? "text-blue-300" : "text-blue-900"}`} onClick={() => router.push("/")}>Home</small> <MdKeyboardDoubleArrowRight /> <small>{title}</small>
                    </div>

                    <div id="title" className="mt-2 text-4xl font-bold">
                        <p>{title}</p>
                    </div>

                    <div id="author" className="mt-2 flex gap-2 items-center font-semibold text-sm">
                        <p>Nahira</p>
                        <span className="text-[10px]"><GoDotFill /></span>
                        <p>25 Maret 2025</p>
                    </div>

                    <div id="img" className="mt-5 w-full sm:w-4/5 h-[200px] sm:h-[350px] rounded-xl relative">
                        <Image className="rounded-xl object-cover" src={"/title/title6.png"} alt="thumbnail" fill></Image>
                    </div>

                    <div id="body" className="mt-5 w-full text-justify sm:w-4/5 h-fit mb-5">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ children }) => <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-3xl font-semibold mt-5 mb-3">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>,
                                h4: ({ children }) => <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>,
                                h5: ({ children }) => <h5 className="text-lg font-medium mt-3 mb-1">{children}</h5>,
                                h6: ({ children }) => <h6 className="text-base font-medium mt-2 mb-1">{children}</h6>,
                                p: ({ children }) => <p className="text-base leading-relaxed mb-4">{children}</p>,
                                hr: () => <hr className="my-6 border-t-4 opacity-[0.5] border-[grey]" />,
                                blockquote: ({ children }) => (
                                    <blockquote className={`${theme === "dark" ? "text-[var(--background)]" : "text-gray-700"} border-l-4 border-gray-500 pl-4 italic`}>{children}</blockquote>
                                ),
                                table: ({ children }) => <table className="border-collapse border border-gray-400 w-full my-4">{children}</table>,
                                thead: ({ children }) => <thead className={`${theme === "light" ? "bg-[var(--foreground)] text-[var(--background)]" : "bg-[var(--background)] text-black"}`}>{children}</thead>,
                                th: ({ children }) => <th className="border border-gray-400 px-4 py-2 text-left">{children}</th>,
                                td: ({ children }) => <td className="border border-gray-400 px-4 py-2">{children}</td>,
                                ul: ({ children }) => <ul className="list-disc list-inside my-2">{children}</ul>,
                                ol: ({ children }) => <ol className="list-decimal list-inside my-2">{children}</ol>,
                                li: ({ children }) => <li className="ml-6">{children}</li>,
                                pre: ({ children }) => (
                                    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto my-4">{children}</pre>
                                ),
                                code: ({ children }) => <code className="text-white bg-gray-800 px-1 rounded">{children}</code>,
                                a: ({ children, href }) => (
                                    <a href={href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                        {children}
                                    </a>
                                ),
                                img: ({ src, alt }) => <img src={src ?? ""} alt={alt ?? ""} className="rounded-md my-4 max-w-full h-auto" />,
                            }}
                        >
                            {text}
                        </Markdown>

                    </div>
                </div>
            </div>

        </>
    )
}