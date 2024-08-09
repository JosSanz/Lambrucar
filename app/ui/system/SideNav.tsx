'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { AdminIcon, BankIcon, ChartBarIcon, HomeIcon, ProyectionIcon, TransitIcon, UsersIcon } from "../Icons";

const menu = [
    {
        icon: HomeIcon,
        label: "Home",
        path: ""
    },
    {
        icon: ProyectionIcon,
        label: "Proyección",
        path: ""
    },
    {
        icon: TransitIcon,
        label: "Tránsito",
        path: ""
    },
    {
        icon: UsersIcon,
        label: "Operaciones",
        path: ""
    },
    {
        icon: ChartBarIcon,
        label: "Ventas",
        path: "/system/sales",
        submenus: [
            {
                label: "Clientes",
                path: ""
            },
            {
                label: "Cargas",
                path: ""
            },
            {
                label: "Reportes",
                path: ""
            }
        ]
    },
    {
        icon: BankIcon,
        label: "Cobranza y bancos",
        path: ""
    },
    {
        icon: AdminIcon,
        label: "Administración",
        path: ""
    }
];

export default function SideNav() {
    const pathname = usePathname();

    return (
        <nav className="p-4 border-r-2 border-solid border-gray-300">
            <ul className="grid gap-4">
            {menu.map((m, i) => {
                const LinkIcon = m.icon;

                return (
                    <li
                        key={i}
                        className="grid gap-2 text-gray-500"
                    >
                        <div className={`flex items-baseline gap-2 ${pathname === m.path ? 'text-violet-700' : ''} hover:text-gray-800`}>
                            <LinkIcon className="w-4"/>
                            <Link 
                                href={m.path}
                                className="flex-1"
                            >
                                {m.label}
                            </Link>
                        </div>
                        {m.submenus &&
                        <div className="pl-10">
                            <ul className="grid gap-2">
                            {m.submenus.map((s, j) => (
                                <li
                                    key={j}
                                >
                                    <Link 
                                        href={s.path}
                                        className={`block ${pathname === s.path ? 'text-violet-700' : ''} hover:text-gray-800`}
                                    >{s.label}</Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        }
                    </li>
                )
            })}
                    
            </ul>
        </nav>
    )
}