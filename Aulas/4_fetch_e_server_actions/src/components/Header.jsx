import Link from "next/link"


const Header = () => {
    return (
        <header className="bg-indigo-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">

                <Link href="/" className="text-lg font-semibold">
                    Lista de tarefas
                </Link>

                <Link href="/todos/create" className="text-lg font-semibold">
                    Criar Tarefa
                </Link>


            </nav>
        </header>
    )
}


export default Header