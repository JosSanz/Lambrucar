import { fetchSaleHistory } from "@/app/lib/data"
import { toDate, toStringTime, toTime } from "@/app/lib/utils";
import { Fragment } from "react";
import { BusIcon, NotificationIcon, TransitIcon, UserIcon } from "../Icons";

export default async function HistoryTable({ id }: {id: string}) {
    const data = await fetchSaleHistory(id);
    
    return (
        <Fragment>
            <table className="w-[640px] mx-auto">
                <thead>
                    <tr className="bg-violet-200">
                        <th className="p-2">
                            <span className="sr-only">Tipo de proceso</span>
                        </th>
                        <th className="p-2">Fecha</th>
                        <th className="p-2">Hora</th>
                        <th className="p-2">Evento</th>
                        <th className="p-2">Origen</th>
                        <th className="p-2">Lapso</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((d, i) => {
                    const date = toDate(d.dateTime);
                    const time = toTime(d.dateTime);
                    const lapse = toStringTime(d.lapse ?? "");

                    return (
                        <tr key={i} className="border-b border-solid border-gray-300">
                            <td className="p-2">
                            {d.processType === 'user' 
                                ? <UserIcon className="w-6 h-6"/>
                            : d.processType === 'notification'
                                ? <NotificationIcon className="w-6 h-6"/>
                            : d.processType === 'entry'
                                ? <TransitIcon className="w-6 h-6" />
                                : <BusIcon className="w-6 h-6" />
                            }</td>
                            <td className="p-2">{date}</td>
                            <td className="p-2">{time}</td>
                            <td className="p-2">{d.description}</td>
                            <td className="p-2">{d.origin}</td>
                            <td className="p-2">{lapse}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {data.length === 0 && <div className="text-center">No hay resultados para mostrar</div>}
        </Fragment>
    )
}