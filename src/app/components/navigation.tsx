'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();

    const pages = [
        { name: 'Teams', path: '/pages/teams' },
        { name: 'Members', path: '/pages/members' },
    ];

    return (
        <nav className="flex gap-5">
            {pages.map(page => (
                <Link
                    key={page.path}
                    className={`button-link ${pathname === page.path ? 'active' : ''}`}
                    href={page.path}
                >
                    {page.name}
                </Link>
            ))}
        </nav>
    );
}
