import {db} from "@/db";

import { redirect } from 'next/navigation';

const TodoPage = () => {

    const addTodo = async (formData) => {
        "use server"

        console.log(formData);

        const titulo = formData.get("title");
        const descricao = formData.get("description");
        const status = 'Pendente';

        const todo = await db.todo.create({
            data: {
                titulo,
                descricao,
                status
            }
        });

        console.log(todo);

        redirect("/");
    }


    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">Criar nova tarefa</h1>
            <form action={addTodo} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg" >
                <label htmlFor="title" className="block text-sm font-medium text-gray-700" >Título

                </label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Digite o título"
                    required
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                <label htmlFor="description" className="block text-sm font-medium text-gray-700" >Descrição
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Descrição da tarefa"
                    required
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32" />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Criar Tarefa
                </button>

            </form>
        </div>
    )
}

export default TodoPage