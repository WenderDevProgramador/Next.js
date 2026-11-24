import {db} from '@/db.js'
import { notFound } from 'next/navigation';



const TodoShow = async ({ params }) => {
    await new Promise((a)  => setTimeout(a, 1000));


    const {id} = await params;
    const todoId = Number(id)

    const todo = await db.todo.findFirst({
        where: {
            id: todoId
        }
    });

    if(!todo) return notFound();


    return (
        <div>
            <h1> Todo: {todo.titulo}</h1>
            <p>{todo.descricao}</p>
            <p>Status: {todo.status}</p>
        </div>
    )
}

export default TodoShow