import DetailPageLandingMain from "../../../components/templates/pageSections/DetailPageLandingMain"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug;
    return (
        <>
            <DetailPageLandingMain slug={slug} />
        </>
    )
}