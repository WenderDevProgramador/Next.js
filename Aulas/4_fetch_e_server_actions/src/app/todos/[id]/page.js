import {db} from '@/db.js'



const TodoShow = async ({ params }) => {
    const {id} = await params;
    const todoId = Number(id)

    const todo = await db.todo.findFirst({
        where: {
            id: todoId
        }
    })


    return (
        <div>
            <h1> Todo: {todo.titulo}</h1>
            <p>{todo.descricao}</p>
            <p>Status: {todo.status}</p>
        </div>
    )
}

export default TodoShow