import Blog from "@/components/blog"
import Title from "@/components/title"
import { Suspense } from "react"

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Title />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Blog></Blog>
      </Suspense>
    </>
  )
}