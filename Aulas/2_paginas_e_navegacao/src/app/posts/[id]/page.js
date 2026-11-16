import Link from 'next/link'
import React from 'react'

const postPage = ({params}) => {


    // Load de dados baseado em params.id

    const id = params.id

    return (
        
        <div>
                <h1>Título: {id} </h1>
                <p>Texto do post ...</p>

                <Link href='/posts'>Voltar</Link>
        </div>
    )
}

export default postPage