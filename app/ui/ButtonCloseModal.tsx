'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function ButtonCloseModal({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const onCloseModal = () => {
        const params = new URLSearchParams(searchParams);

        params.delete('showSale');

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <button className="bg-neutral-400 hover:bg-neutral-600 py-2 px-4 rounded text-white" onClick={onCloseModal}>
            {children}
        </button>
    );
}