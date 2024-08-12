import { Suspense } from "react";
import HistoryTable from "./HistoryTable";
import { SaleHistoryTableSkeleton } from "../../Skeletons";
import ButtonCloseModal from "../../ButtonCloseModal";

export default async function Modal({ showSale }:{ showSale: string }) {
    if (showSale === '') {
        return null;
    }

    return (
        <div className="absolute top-0 left-0 bg-black/40 w-full h-dvh flex justify-center items-center">
            <div className="grid gap-4 bg-white w-[95%] md:w-[768px] p-4 rounded">
                <Suspense key={showSale} fallback={<SaleHistoryTableSkeleton />}>
                    <HistoryTable id={'1'}/>
                </Suspense>
                <div className="text-center">
                    <ButtonCloseModal>
                        Cerrar
                    </ButtonCloseModal>
                </div>
            </div>
        </div>
    )
}