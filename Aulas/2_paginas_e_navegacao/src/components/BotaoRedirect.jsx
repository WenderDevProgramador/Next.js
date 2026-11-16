"use client";

import {useRouter} from 'next/navigation';

const BotaoRedirect = () => {

    const router = useRouter();

    function handleRedirect() {
        router.push('/dashboard');
    }


    return (
        <button className= "link" onClick={handleRedirect}>Finalizar envio</button>
    )
}

export default BotaoRedirect