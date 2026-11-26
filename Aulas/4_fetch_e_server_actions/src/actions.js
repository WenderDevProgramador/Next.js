"use server"

import { db } from "@/db.js";
import { redirect } from "next/navigation";




export async function deleteTodo(formData) {


    const id = Number(formData.get("id"));

    await db.todo.delete({
        where: {
            id: id,
        },
    });

    redirect("/");
}

export const addTodo = async (formData) => {

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

    redirect("/");
}


export const findTodoById = async (id) => {

    const todo = await db.todo.findFirst({
        where: {
            id: id,
        },
    });

    return todo;
};


export const updateTodo = async (formState, formData) => {
    const id = Number(formData.get("id"));
    const titulo = formData.get("title");
    const descricao = formData.get("description");

    if(titulo.length < 5) {
        return { errors: "O título deve ter pelo menos 5 caracteres." };
    }

    if(descricao.length < 10) {
        return { errors: "A descrição deve ter pelo menos 10 caracteres." };
    }

    await db.todo.update({
        where: {
            id: id,
        },
        data: {
            titulo,
            descricao,
            
        },
    });

    redirect("/");
};
