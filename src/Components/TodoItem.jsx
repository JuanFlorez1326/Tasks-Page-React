import React from "react";

export function TodoItem({todo,togleTodo}) {
    const {id, task, completed} = todo

    const hadleTodoClick = () =>{
        togleTodo(id)
    } 

    return(<li><input type="checkbox" checked={completed} onChange ={hadleTodoClick}/>  
        {task}
    </li>)
}