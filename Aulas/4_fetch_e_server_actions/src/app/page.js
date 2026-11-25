import Image from "next/image";
import Link from "next/link";
import { db } from "@/db.js";

import Button from "@/components/Button";
import { deleteTodo } from "@/actions";

export const instant = false;

export default async function Home() {

  // Resgatando dados do banco
  const todos = await db.todo.findMany();

  

  return (
    <main className="container mx-auto p-4">
      
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold">{todo.titulo}</h2>
            <p className="text-gray-600">{todo.descricao}</p>
            <p className="text-gray-500">Status: {todo.status}</p>
            {/*  Ações */}

            <div className="flex space-x-2 mt-2">
              <Link href={`/todos/${todo.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Visualizar
              </Link>

              <Link href={`/todos/${todo.id}/edit`} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Editar
              </Link>
              <form action={deleteTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <Button  >
                  Excluir
                </Button>
              </form>
            </div>
          </div>

        ))}
      </div>


    </main>
  );
}
