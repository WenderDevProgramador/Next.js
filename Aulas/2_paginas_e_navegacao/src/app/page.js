import BotaoRedirect from "@/components/BotaoRedirect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      {/* Aula 1 - Navegação */}
      <h1>Home</h1>
      <Link href='/sobre'>Sobre</Link>

      {/* Aula 2 - Dados dinâmicos de navegação */}
      <h1>Acessar posts</h1>
      <Link href='/posts'>Posts</Link>
      {/* Aula 3 - Parametros na URL */}

      <Link href="/exemplo?parametro=valor">Página exemplo</Link>

      {/* Aula 4 - nested routes */}

      <Link href="/products/categorias/roupas">Ir a categoria de Roupas</Link>

      {/* Nested layout */}

      <Link href="/dashboard">Ir para o dashboard</Link>

      {/* Aula 9 - useRouter */}

      <BotaoRedirect/>

      {/* Aula 10 - Redirect */}

    </main>

  );
}
