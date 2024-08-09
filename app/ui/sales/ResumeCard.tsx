export default function ResumeCard({
    name,
    total,
    current,
    stats
}:{
    name: string
    total: number,
    current: number,
    stats: {
        pending: number,
        inProcess: number,
        finished: number
    }
}) {
    const maxValue = Math.max(stats.pending, stats.inProcess, stats.finished);

    return (
        <div className="grid gap-4 border-solid border-gray-300 border-x-2 w-52 p-4">
            <h2 className="text-lg font-bold text-center text-violet-700">{name}</h2>
            <div>
                <div className="h-6 border-solid border-2 border-gray-300 bg-gray-200">
                    <div className="h-full bg-green-700 opacity-50" style={{width: `${(current / total) * 100}%`}}></div>
                </div>
                <div className="text-green-700">{current}/{total}</div>
            </div>
            <div className="flex justify-between items-end">
                <div className="h-40 flex flex-col justify-end">
                    <div className="w-8 bg-red-200" style={{height: `${(stats.pending / maxValue) * 100}%`}}></div>
                    <div className="text-center">{stats.pending}</div>
                </div>
                <div className="h-40 flex flex-col justify-end">
                    <div className="w-8 bg-green-200" style={{height: `${(stats.inProcess / maxValue) * 100}%`}}></div>
                    <div className="text-center">{stats.inProcess}</div>
                </div>
                <div className="h-40 flex flex-col justify-end">
                    <div className="w-8 bg-blue-200" style={{height: `${(stats.finished / maxValue) * 100}%`}}></div>
                    <div className="text-center">{stats.finished}</div>
                </div>
            </div>
        </div>
    );
}