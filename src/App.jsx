import './App.css'
import React, {useState,Fragment, useRef,useEffect} from "react";
import { TodoList } from "./Components/TodoList/TodoList";
import {v4 as uuidv4} from 'uuid';
import { TodoHeader } from "./Components/TodoHeader/TodoHeader";
import { TodoFooter } from "./Components/TodoFooter/TodoFooter";

const KEY = "todoApp.todos"

export function App() {
    const [todos,setTodos] = useState([{id:1,task: "Tarea1",completed: false}])
    const todoTaskRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY))
        if(storedTodos){
            setTodos(storedTodos)
        }
    },[])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

    const togleTodo = (id) => {
        const newTodos = [...todos]
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed
        setTodos(newTodos)
    }

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value
        if(task === "")return

        setTodos((prevTodos) => {
            return [...prevTodos,{id:uuidv4(),task,completed:false}]
        })
        todoTaskRef.current.value = null
    }

    const hadleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed)
        setTodos(newTodos)
    }


    return(
        <Fragment>
            <TodoHeader/>
            <TodoList todos = {todos} togleTodo={togleTodo}/>
                <div className="classTodoList" >
                    <input className="taskInput"  ref={todoTaskRef} type="text" placeholder = "New Homework"/>
                    <button className="btnAdd" onClick={handleTodoAdd}>Add</button>
                    <button className="btnDelete" onClick={hadleClearAll}>Delete</button>
                    <div className="divMessage">
                        You have {todos.filter((todo) => !todo.completed).length} tasks left per terminal.
                    </div>
                </div>
            <TodoFooter/>
        </Fragment>
    )
}