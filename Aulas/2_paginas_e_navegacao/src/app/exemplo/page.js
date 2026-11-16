"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'

const exemplePage = () => {
    const searchParams = useSearchParams()

    const valorParam = searchParams.get('parametro') // nomeDoParametro é o nome do parametro que você quer pegar da URL

    const presencaParam = searchParams.has('parametro') // verifica se o parametro existe na URL

    return (
        <div>
            <h1>Valor do parâmetro: {valorParam}</h1>
            <p>Parâmetro presente: {presencaParam ? 'Sim' : 'Não'}</p>
        </div>
    )
}

export default exemplePage