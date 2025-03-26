export default async function ReadPage({ params }: { params: Promise<{ blog: string }> }) {
    
    const {blog} = await params;
    
    return (
        <>
            <p>{decodeURIComponent(blog)}</p>
        </>
    )
}   