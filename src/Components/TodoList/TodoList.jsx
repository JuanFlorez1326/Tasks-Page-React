import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList({ todos,togleTodo}){
    return (
    <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id}  todo={todo} togleTodo = {togleTodo}/>
        ))}
    </ul>)
}
