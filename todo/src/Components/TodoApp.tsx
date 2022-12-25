import React, { useEffect, useState } from 'react'
import { getTodos, updateTodo } from '../api'
import { Todo } from '../Constents'
import TodoItem from './TodoItem'
import TodoInput from './TodoInput'
import "./todo.css"

const TodoApp = () => {
    const [data, setData]=useState<Todo[]>([])

    const onAdd=(todo:Todo)=>{
        setData([...data, todo])
    }

    const onUpdate=(updateTodo:Todo)=>{
        let onUpdateTodo=data.map((el)=>{
            if(el.id==updateTodo.id){
                return updateTodo
            }
            return el;
        });
        setData(onUpdateTodo)
    }

    useEffect(()=>{
        getTodos().then((res)=>setData(res))
    },[])
    console.log(data)
  return (
    <div>
        <TodoInput onAdd={onAdd} />
        <br />
        <div id='todo'>
           {
            data.map((el)=>(
                <TodoItem onUpdate={onUpdate} key={el.id} {...el} />
            ))
           }
        </div>
    </div>
  )
}

export default TodoApp