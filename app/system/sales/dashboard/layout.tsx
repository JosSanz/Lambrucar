import CityCards from "@/app/ui/sales/dashboard/CityCards";
import { CityCardSkeleton } from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid gap-4">
            <h1 className="text-xl font-bold text-violet-700">Dashboard de Cargas/Operaciones</h1>
        
            <Suspense fallback={<CityCardSkeleton />}>
                <CityCards />
            </Suspense>
            
            {children}
        </div>
    )
}