
"use client";

import { updateTodo } from "@/actions";
import { useActionState } from "react";

const TodoForm = ({ todo }) => {
    const [formState, formAction] = useActionState(
        updateTodo,
        { errors: "" }
    );

    return (
        <form
            action={formAction}
            className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
        >

            {formState.errors ? (
                <p className="text-red-500">{formState.errors}</p>
            ) : ""}


            <input
                type="hidden"
                name="id"
                value={todo.id}
            />

            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título
            </label>

            <input
                id="title"
                type="text"
                name="title"
                placeholder="Digite o título"
                required
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                defaultValue={todo.titulo}
            />

            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição
            </label>

            <textarea
                id="description"
                name="description"
                placeholder="Descrição da tarefa"
                required
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm h-32"
                defaultValue={todo.descricao}
            />

            <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 cursor-pointer"
            >
                Editar Tarefa
            </button>


        </form>
    );
};

export default TodoForm;
