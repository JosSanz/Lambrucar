'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function ButtonOpenModal({ 
    id, 
    children 
}: { 
    id: number;
    children: React.ReactNode;
}) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const onOpenModal = () => {
        const params = new URLSearchParams(searchParams);

        params.set('showSale', id.toString());

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <button className="text-neutral-400 hover:text-inherit" onClick={onOpenModal}>
            {children}
        </button>
    );
}