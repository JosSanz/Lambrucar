import SalesTable from "@/app/ui/sales/dashboard/SalesTable";
import { Suspense } from "react";
import Search from "@/app/ui/Search";
import { SalesTableSkeleton } from "@/app/ui/Skeletons";

export default async function Page({
    searchParams
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="grid gap-4">
            <Search placeholder="Buscar..." />

            <Suspense key={query + currentPage} fallback={<SalesTableSkeleton />}>
                <SalesTable query={query} currentPage={currentPage}/>
            </Suspense>
        </div>
    )
}