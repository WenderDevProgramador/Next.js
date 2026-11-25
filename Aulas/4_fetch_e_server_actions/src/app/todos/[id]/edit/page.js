import { findTodoById } from "@/actions";

const TodoEdit = async ({ params }) => {

    const { id } = await params;
    const todoId = Number(id);

    const todo = await findTodoById(todoId);

    return (
        <div>
            <h1>Editando: {todo.titulo}</h1>
        </div>
    );
};

export default TodoEdit;