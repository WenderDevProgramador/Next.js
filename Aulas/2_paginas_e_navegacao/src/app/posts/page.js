import Link from 'next/link'
import React from 'react'

const page = () => {

    const postsIds = [1,2,3]

    return (
        <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

            <h1>Blog</h1>
            <ul>
                {postsIds.map((id) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>Ver post {id}</Link>
                    </li>
                ) )}
            </ul>

            <Link href='/'>Voltar</Link>

        </div>
    )
}

export default page