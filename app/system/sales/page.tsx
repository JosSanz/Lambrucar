import CityCards from "@/app/ui/sales/CityCards";
import { Fragment } from "react";

export default function Page() {
    return (
        <div className="grid gap-4">
            <h1 className="text-xl font-bold text-violet-700">Dashboard de Cargas/Operaciones</h1>
        
            <CityCards />
        </div>
    )
}