import Artikel from "@/components/blog/artikel";

export default async function ReadPage({ params }: { params: Promise<{ blog: string }> }) {

    const { blog } = await params;
    const title = decodeURIComponent(blog)

    return (
        <>
            <Artikel title={title}></Artikel>
        </>
    )
}   