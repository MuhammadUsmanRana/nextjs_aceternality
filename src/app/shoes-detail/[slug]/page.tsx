import Link from "next/link"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl">{slug}</h1>
        <Link href="/" className="mt-4">
            back to home
        </Link>
    </div>
    )
}