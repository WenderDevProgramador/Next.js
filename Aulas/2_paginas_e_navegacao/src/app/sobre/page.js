import React from 'react'

import Link from 'next/link'

const sobrePage = () => {
    return (
        <div  className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>Página Sobre</h1>
            <Link href='/'>Home</Link>
        </div>
    )
}

export default sobrePage