import React from 'react'
import { updateTodo } from '../api';
import { ColorMap, Todo } from '../Constents';
import "./todo.css"
interface TodoItemProps extends Todo{
    onUpdate:(todo:Todo)=>void;
}
//type TodoItemProps =Todo
const TodoItem = (props:TodoItemProps) => {

    const handleClick=async()=>{
        let updatedTodo=await updateTodo({
            ...props,
            likes:props.likes+1
        })
        props.onUpdate(updatedTodo);
    }
  return (
    <div id="todoitem" style={{backgroundColor:ColorMap[props.type]}}>
        <h3>{props.message}</h3>
            <div id="like">
            <button>{props.likes}</button>
           <button onClick={handleClick}>Like</button>
            </div>
    </div>
  )
}

export default TodoItem