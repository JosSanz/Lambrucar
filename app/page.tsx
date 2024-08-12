import Link from "next/link";

export default function Home() {
    return (
        <main className="min-w-full min-h-dvh flex flex-col gap-4 justify-center items-center">
            <div className="w-40">
                <img 
                    src="/static/images/Icono.png"
                    alt="Logotipo" 
                    className="max-w-full"
                />
            </div>
            <Link 
                href={"/system"}
                className="bg-violet-500 rounded py-2 px-4 text-white hover:bg-violet-800"
            >Ir al inicio</Link>
        </main>
    );
}
