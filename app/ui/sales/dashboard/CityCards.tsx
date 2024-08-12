import { OilStationIcon, OilTruckIcon } from "../../Icons";
import ResumeCard from "./ResumeCard";
import { fetchSummaryByStates } from "@/app/lib/data";

export default async function CityCards() {
    const data = await fetchSummaryByStates();
    
    return (
        <section className="flex gap-8 overflow-x-auto">
            <div className="flex flex-col justify-center items-center">
                <OilStationIcon className="w-20 h-20"/>
                <OilTruckIcon className="w-32 h-32"/>
            </div>
        {data.map((d, i) => (
            <ResumeCard
                key={i}
                {...d}
            />
        ))}
        </section>
    );
}