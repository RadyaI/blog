import Blog from "@/components/blogHome"
import Title from "@/components/title"
import Navbar from "@/components/navbar";
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Title />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog></Blog>
      </Suspense>
    </>
  )
}