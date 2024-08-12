// Loading animation
const shimmer =
	"before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CityCardSkeleton() {
	return (
		<div
			className={`${shimmer} w-52 relative overflow-hidden bg-gray-200 p-2 grid gap-4`}
		>
			<div className="h-4 w-3/4 mx-auto bg-gray-300"></div>
			<div className="h-6 bg-gray-300"></div>
			<div className="flex h-32 justify-between items-end">
				<div className="w-8 h-1/3 bg-gray-300"></div>
				<div className="w-8 h-2/3 bg-gray-300"></div>
				<div className="w-8 h-full bg-gray-300"></div>
			</div>
		</div>
	);
}

export function SalesTableRowSkeleton() {
	return (
		<tr className="border-b border-solid border-gray-300">
			<td className="p-2">
                <div className="grid grid-cols-2 gap-2">
                    <div className="h-6 bg-gray-300"></div>
                    <div className="h-6 bg-gray-300"></div>
                </div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
				<div className="h-6 bg-gray-300"></div>
			</td>
			<td className="p-2">
				<div className="h-6 bg-gray-300"></div>
			</td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 w-6 bg-gray-300"></div>
			</td>
		</tr>
	);
}

export function SalesTableSkeleton() {
	return (
		<table className="w-full overflow-hidden">
			<thead>
				<tr className="bg-violet-200">
					<th className="p-2">Fecha Hora SOL.</th>
					<th className="p-2">Origen</th>
					<th className="p-2">Cliente</th>
					<th className="p-2">No. Unidad</th>
					<th className="p-2">Avance operación</th>
					<th className="p-2">Estatus</th>
					<th className="p-2">ETA</th>
					<th className="p-2">
						<span className="sr-only">Ver</span>
					</th>
				</tr>
			</thead>
			<tbody className={`${shimmer} relative overflow-hidden bg-gray-200`}>
                <SalesTableRowSkeleton />
                <SalesTableRowSkeleton />
                <SalesTableRowSkeleton />
                <SalesTableRowSkeleton />
            </tbody>
		</table>
	);
}

export function SaleHistoryTableRowSkeleton() {
	return (
		<tr className="border-b border-solid border-gray-300">
			<td className="p-2">
                <div className="h-6 w-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
                <div className="h-6 bg-gray-300"></div>
            </td>
			<td className="p-2">
				<div className="h-6 bg-gray-300"></div>
			</td>
			<td className="p-2">
				<div className="h-6 bg-gray-300"></div>
			</td>
		</tr>
	);
}

export function SaleHistoryTableSkeleton() {
	return (
		<table className="w-full overflow-hidden">
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
			<tbody className={`${shimmer} relative overflow-hidden bg-gray-200`}>
                <SaleHistoryTableRowSkeleton />
                <SaleHistoryTableRowSkeleton />
                <SaleHistoryTableRowSkeleton />
                <SaleHistoryTableRowSkeleton />
            </tbody>
		</table>
	);
}
