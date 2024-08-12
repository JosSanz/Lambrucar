'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from './Icons';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        }
        else {
            params.delete('query');
        }

        params.set('page', '1');

        replace(`${pathName}?${params.toString()}`);
    }, 300);
    
    return (
        <div className="relative flex flex-1 flex-shrink-0 max-w-80">
            <label htmlFor="search" className="sr-only">
                Buscar
            </label>
            <input
                className="peer block w-full rounded border border-gray-300 py-2 pl-10 pr-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus:border-violet-700"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <SearchIcon className="absolute w-5 h-5 top-1/4 left-2 text-gray-500 peer-focus:text-violet-700" />
        </div>
    )
}