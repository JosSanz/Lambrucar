import Link from "next/link";

export default function Home() {
    return (
        <main className="min-w-full min-h-dvh flex justify-center items-center">
            <Link 
                href={"/system"}
                className="bg-violet-500 rounded py-2 px-4 text-white hover:bg-violet-800"
            >Ir al inicio</Link>
        </main>
    );
}
