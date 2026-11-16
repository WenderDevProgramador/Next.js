"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Nav = () => {

    const pathname = usePathname();

    return (
        <nav>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>Home</Link>
            </li>

            <li>
                <Link className={`link ${pathname === '/sobre' ? 'active' : ''}`} href='/sobre'>Sobre</Link>
            </li>
        </nav>
    )
}

export default Nav