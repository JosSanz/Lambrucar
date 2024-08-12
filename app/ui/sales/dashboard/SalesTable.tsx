import { toDateTime } from "@/app/lib/utils";
import { EyeIcon } from "../../Icons";
import Link from "next/link";
import { fetchSales } from "@/app/lib/data";
import { Fragment } from "react";

export default async function SalesTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const data = await fetchSales(query, currentPage);
    
    return (
        <Fragment>
            <table className="w-full">
                <thead>
                    <tr className="bg-violet-200">
                        <th className="p-2">Fecha Hora SOL.</th>
                        <th className="p-2">Origen</th>
                        <th className="p-2">Cliente</th>
                        <th className="p-2">No. Unidad</th>
                        <th className="p-2 w-px">Avance operación</th>
                        <th className="p-2">Estatus</th>
                        <th className="p-2">ETA</th>
                        <th className="p-2">
                            <span className="sr-only">Ver</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map(d => {
                    const dateTime = toDateTime(d.datetime);

                    return (
                        <tr key={d.id} className="border-b border-solid border-gray-300">
                            <td className="p-2">{dateTime}</td>
                            <td className="p-2">{d.origin}</td>
                            <td className="p-2">{d.client}</td>
                            <td className="p-2">{d.noUnit}</td>
                            <td className="p-2">
                                <div className="w-40 h-4 bg-gray-300 overflow-hidden rounded-sm">
                                    <div className="h-full bg-green-700 opacity-50" style={{ width: `${d.advance}%`}}></div>
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-center items-center">
                                    <span className="bg-yellow-500 text-sm py-1 px-2 rounded-full">
                                        {d.status}
                                    </span>
                                </div>
                            </td>
                            <td className="p-2">{d.eta} h</td>
                            <td className="p-2">
                                <div className="flex justify-center items-center">
                                    <Link 
                                        href={`/system/sales/${d.id}`}
                                        className="text-neutral-400 hover:text-inherit"
                                    >
                                        <EyeIcon className="w-6"/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            {data.length === 0 && <div className="text-center">No hay resultados para mostrar</div>}
        </Fragment>
    )
}