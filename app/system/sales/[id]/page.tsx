import { StepBackIcon } from "@/app/ui/Icons";
import HistoryTable from "@/app/ui/sales/HistoryTable";
import { SaleHistoryTableSkeleton } from "@/app/ui/Skeletons";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
    params
}: {
    params: { id: string }
}) {
    const id = params.id;

    return (
        <div className="grid gap-4">
            <Link 
                href={"/system/sales/dashboard"}
                className="text-neutral-500 hover:text-inherit flex gap-2"
            >
                <StepBackIcon  className="w-6 h-6"/>
                Regresar
            </Link>
            
            <h1 className="text-xl font-bold text-violet-700">Detalles de la venta</h1>

            <Suspense fallback={<SaleHistoryTableSkeleton />}>
                <HistoryTable id={id} />
            </Suspense>
        </div>
    );
}