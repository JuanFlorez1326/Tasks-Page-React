import React from "react";
import './TodoItem.css'

export function TodoItem({todo,togleTodo}) {
    const {id, task, completed} = todo

    const hadleTodoClick = () =>{
        togleTodo(id)
    } 

    return(
        <div className = "divTasks">
           <div >
                <li className="taskLi">
                    <input className="inCheckbox" type="checkbox" checked={completed} onChange ={hadleTodoClick}/>  
                    {task}
                </li>
            </div>
        </div>

    )
}