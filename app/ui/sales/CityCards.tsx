import ResumeCard from "./ResumeCard";

const data = [
    {
        name: 'Querétaro',
        total: 35,
        current: 10,
        stats: {
            pending: 8,
            inProcess: 3,
            finished: 10
        }
    },
    {
        name: 'San Luis Potosí',
        total: 35,
        current: 10,
        stats: {
            pending: 8,
            inProcess: 3,
            finished: 10
        }
    },
    {
        name: 'Aguascalientes',
        total: 35,
        current: 10,
        stats: {
            pending: 8,
            inProcess: 3,
            finished: 10
        }
    }
]

export default function CityCards() {
    return (
        <section className="flex gap-8 overflow-x-auto">
        {data.map((d, i) => (
            <ResumeCard
                key={i}
                {...d}
            />
        ))}
        </section>
    );
}