import Link from "next/link";
import { ExitIcon, UserIcon } from '@/app/ui/Icons';

export default function Header() {
    return (
        <header className="flex justify-between items-center border-b-2 border-solid border-gray-300">
            <div className="w-60 px-4 pb-6">
                <img 
                    src="/static/images/Logo.png" 
                    alt="Logotipo" 
                    className="max-w-full"
                />
            </div>
            <div className="flex items-center gap-x-4 px-4">
                <Link 
                    href={""}
                    className="text-violet-700 hover:text-violet-800"
                >
                    <UserIcon className="w-6"/>
                </Link>
                <Link 
                    href={"/"}
                    className="text-violet-700 hover:text-violet-800"
                >
                    <ExitIcon className="w-6"/>
                </Link>
            </div>
        </header>
    )
}