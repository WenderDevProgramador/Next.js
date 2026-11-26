import { findTodoById } from "@/actions";
import TodoForm from "@/components/TodoForm";

const TodoEdit = async ({ params }) => {

    const { id } = await params;
    const todoId = Number(id);

    const todo = await findTodoById(todoId);

    return (
        <div>
            <h1>Editando: {todo.titulo}</h1>
            <TodoForm todo={todo} />
        </div>
    );
};

export default TodoEdit;